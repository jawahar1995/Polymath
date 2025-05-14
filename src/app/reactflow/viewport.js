'use client';

import { Button } from "@/components/ui/button"
//import React from 'react';
import React, { useState, useCallback } from 'react';
import { ReactFlow, Background, Controls, ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { initialNodes } from './nodes';
import { initialEdges } from './edges';
//import ReactFlow, { Background, Controls } from 'reactflow';
//import 'reactflow/dist/style.css';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerFooter
} from '@/components/ui/drawer';
 
function Viewport() {

  const [selectedNode, setSelectedNode] = useState(null);
  const onNodeClick = useCallback((_, node) => {
    setSelectedNode(node);
  }, []);

  const closeDrawer = () => setSelectedNode(null);

  return (
    <ReactFlowProvider>
      <div style={{ height: '100%' }}>
        <ReactFlow nodes={initialNodes} edges={initialEdges} onNodeClick={onNodeClick} fitView>
          <Background />
          <Controls />
        </ReactFlow>
        <Drawer direction="right" open={!!selectedNode} onOpenChange={val => !val && closeDrawer()}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Node Details</DrawerTitle>
              <DrawerDescription>Information about the selected node</DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              {selectedNode && (
                <>
                  <p><strong>ID:</strong> {selectedNode.id}</p>
                  <p><strong>Label:</strong> {selectedNode.data?.label}</p>
                </>
              )}
            </div>
            <DrawerClose className="absolute top-2 right-2 text-sm text-muted-foreground">
              Close
            </DrawerClose>
            <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
                <Button variant="outline">Cancel</Button>
            </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </ReactFlowProvider>
  );
}
 
export default Viewport;