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
              <DrawerTitle>Second Page</DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
               <DrawerClose>
                  <Button className="" variant="outline">Cancel</Button>
              </DrawerClose>
              <Button>Submit</Button>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
  )
}