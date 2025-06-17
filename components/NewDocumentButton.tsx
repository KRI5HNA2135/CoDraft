'use client'
import { useTransition } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';
import { createNewDoc } from '@/actions/actions';

const NewDocumentButton = () => {

  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleCreateNewDoc = () => {
    startTransition(async () => {
      try {
        const {docId} = await createNewDoc();
        router.push(`/doc/${docId}`)
      } catch (error) {
        console.error("Error Creating doc: ", error)
      }
    })
  }

  return (
    <>
    <Button onClick={handleCreateNewDoc} disabled={isPending}>
      {isPending ? "Creating..." : "New Document"} </Button>
      
      
      
      </>
  )
}

export default NewDocumentButton