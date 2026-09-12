import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

type ScriptPreviewDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  script: string
}

export function ScriptPreviewDialog({
  open,
  onOpenChange,
  script,
}: ScriptPreviewDialogProps) {
  async function handleCopy() {
    await navigator.clipboard.writeText(script)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex h-[95vh] w-[95vw] max-w-none flex-col sm:w-[95vw] sm:max-w-none">
        <DialogHeader>
          <DialogTitle>Generiertes NWScript</DialogTitle>

          <DialogDescription>
            Das Skript kann direkt in das NWN-Toolset kopiert werden.
          </DialogDescription>
        </DialogHeader>

        <pre className="min-h-0 flex-1 overflow-auto rounded-md border bg-muted p-4 text-sm">
          <code>{script}</code>
        </pre>

        <div className="flex justify-end">
          <Button onClick={handleCopy}>Skript kopieren</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
