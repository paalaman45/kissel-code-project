// Firestore composable for database operations
import { ref, type Ref } from 'vue'
import { 
  collection, 
  doc, 
  getDocs, 
  getDoc,
  addDoc, 
  setDoc,
  updateDoc, 
  deleteDoc,
  orderBy,
  query,
  type DocumentData,
  type Query,
  type CollectionReference
} from 'firebase/firestore'
import { db } from '@/firebase/config'

interface QueryOptions {
  orderBy?: string
  orderDirection?: 'asc' | 'desc'
}

interface DocumentWithId {
  id: string
  [key: string]: any
}

/**
 * Generic Firestore CRUD operations
 */
export const useFirestore = (collectionName: string) => {
  const documents: Ref<DocumentWithId[]> = ref([])
  const document: Ref<DocumentWithId | null> = ref(null)
  const loading = ref(false)
  const error: Ref<string | null> = ref(null)

  // Get reference to the collection
  const collectionRef = collection(db, collectionName)

  /**
   * Fetch all documents from the collection
   */
  const fetchDocuments = async (options: QueryOptions = {}) => {
    try {
      loading.value = true
      error.value = null
      
      let q: Query<DocumentData> | CollectionReference<DocumentData> = collectionRef
      
      // Apply ordering if specified
      if (options.orderBy) {
        q = query(q, orderBy(options.orderBy, options.orderDirection || 'asc'))
      }
      
      const querySnapshot = await getDocs(q)
      const docs: DocumentWithId[] = []
      
      querySnapshot.forEach((doc) => {
        docs.push({
          id: doc.id,
          ...doc.data()
        })
      })
      
      documents.value = docs
      return docs
    } catch (err: any) {
      error.value = err.message || 'Error fetching documents'
      // Only log errors if they're not connectivity/configuration issues
      if (!err.message?.includes('Firebase') && !err.message?.includes('not found')) {
        console.error('Error fetching documents:', err)
      }
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Fetch a single document by ID
   */
  const fetchDocument = async (id: string) => {
    try {
      loading.value = true
      error.value = null
      
      const docRef = doc(db, collectionName, id)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        const docData: DocumentWithId = {
          id: docSnap.id,
          ...docSnap.data()
        }
        document.value = docData
        return docData
      } else {
        throw new Error(`Document with ID '${id}' not found in collection '${collectionName}'`)
      }
    } catch (err: any) {
      error.value = err.message || 'Error fetching document'
      // Only log errors if they're not connectivity/configuration issues
      if (!err.message?.includes('Firebase') && !err.message?.includes('not found')) {
        console.error('Error fetching document:', err)
      }
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Create a new document (auto-generated ID)
   */
  const createDocument = async (data: Record<string, any>) => {
    try {
      loading.value = true
      error.value = null
      
      // Add timestamp fields
      const docData = {
        ...data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      
      const docRef = await addDoc(collectionRef, docData)
      
      // Refresh the documents list
      await fetchDocuments()
      
      return docRef
    } catch (err: any) {
      error.value = err.message || 'Error creating document'
      console.error('Error creating document:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Create a new document with custom ID
   */
  const createDocumentWithId = async (id: string, data: Record<string, any>) => {
    try {
      loading.value = true
      error.value = null
      
      // Add timestamp fields
      const docData = {
        ...data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      
      const docRef = doc(db, collectionName, id)
      await setDoc(docRef, docData)
      
      // Refresh the documents list
      await fetchDocuments()
      
      return docRef
    } catch (err: any) {
      error.value = err.message || 'Error creating document'
      console.error('Error creating document:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Update an existing document
   */
  const updateDocument = async (id: string, data: Record<string, any>) => {
    try {
      loading.value = true
      error.value = null
      
      const docRef = doc(db, collectionName, id)
      const updateData = {
        ...data,
        updatedAt: new Date().toISOString()
      }
      
      await updateDoc(docRef, updateData)
      
      // Refresh the documents list
      await fetchDocuments()
      
      return { success: true }
    } catch (err: any) {
      error.value = err.message || 'Error updating document'
      console.error('Error updating document:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Delete a document
   */
  const deleteDocument = async (id: string) => {
    try {
      loading.value = true
      error.value = null
      
      const docRef = doc(db, collectionName, id)
      await deleteDoc(docRef)
      
      // Refresh the documents list
      await fetchDocuments()
      
      return { success: true }
    } catch (err: any) {
      error.value = err.message || 'Error deleting document'
      console.error('Error deleting document:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    documents,
    document,
    loading,
    error,
    fetchDocuments,
    fetchDocument,
    createDocument,
    createDocumentWithId,
    updateDocument,
    deleteDocument
  }
}