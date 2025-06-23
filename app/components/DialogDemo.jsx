'use client';

import * as Dialog from '@radix-ui/react-dialog';

export default function DialogDemo() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-black text-white px-4 py-2 rounded">Open Dialog</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 bg-white p-6 rounded shadow-lg -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="text-lg font-bold">Dialog Title</Dialog.Title>
          <Dialog.Description>This is a Radix dialog</Dialog.Description>
          <Dialog.Close className="mt-4 text-sm text-blue-500">Close</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
