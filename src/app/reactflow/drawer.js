import { Button } from "@/components/ui/button"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

 
export function DrawerDemo() {
  return (
    <Drawer direction="right">
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
              <DrawerClose>
                  <Button variant="outline">Cancel</Button>
              </DrawerClose>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
  )
}