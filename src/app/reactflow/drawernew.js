'use client'

import * as React from 'react'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function ResizableDrawer() {
  const [width, setWidth] = React.useState(300) // default width in px
  const drawerRef = React.useRef<HTMLDivElement>(null)

  const isResizing = React.useRef(false)

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current || !drawerRef.current) return
      const newWidth = e.clientX
      if (newWidth > 200 && newWidth < 600) {
        setWidth(newWidth)
      }
    }

    const stopResizing = () => {
      isResizing.current = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', stopResizing)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', stopResizing)
    }
  }, [])

  return (
    <Drawer>
      <DrawerTrigger className="p-2 bg-primary text-white rounded">
        Open Resizable Drawer
      </DrawerTrigger>
      <DrawerContent
        side="left"
        className="p-0"
        style={{ width }}
        ref={drawerRef}
      >
        <div className="h-full flex">
          <div className="flex-1 p-4">
            <p>This drawer can be resized from the right edge.</p>
          </div>
          <div
            onMouseDown={() => (isResizing.current = true)}
            className="w-2 cursor-col-resize bg-gray-300 hover:bg-gray-400"
          />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
