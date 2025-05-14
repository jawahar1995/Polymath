'use client';

import { Button } from "@/components/ui/button";
import React, { useState, useCallback } from 'react';
import { ReactFlow, Background, Controls, ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { v4 as uuidv4 } from 'uuid';

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerFooter
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input'; // Assuming you have this component

import { initialNodes } from './nodes';
import { initialEdges } from './edges';

function Viewport() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [editedLabel, setEditedLabel] = useState('');

  const onNodeClick = useCallback((_, node) => {
    setSelectedNode(node);
    setEditedLabel(node?.data?.label || '');
  }, []);

  const closeDrawer = () => setSelectedNode(null);

  const handleLabelChange = (e) => {
    setEditedLabel(e.target.value);
  };

  const handleSave = () => {
    setNodes((nds) =>
      nds.map((n) =>
        n.id === selectedNode.id
          ? { ...n, data: { ...n.data, label: editedLabel } }
          : n
      )
    );
    closeDrawer();
  };

  const handleDelete = () => {
    setNodes((nds) => nds.filter((n) => n.id !== selectedNode.id));
    setEdges((eds) => eds.filter((e) => e.source !== selectedNode.id && e.target !== selectedNode.id));
    closeDrawer();
  };

  const handleAddNode = () => {
    const newNode = {
      id: uuidv4(),
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: 'New Node' },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <ReactFlowProvider>
      <div className="h-full relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodeClick={onNodeClick}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>

        <Button
          className="absolute top-4 left-4 z-50"
          onClick={handleAddNode}
        >
          Add Node
        </Button>

        <Drawer direction="right" open={!!selectedNode} onOpenChange={val => !val && closeDrawer()}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Edit Node</DrawerTitle>
              <DrawerDescription>Edit or delete the selected node</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 space-y-4">
              {selectedNode && (
                <>
                  <p><strong>ID:</strong> {selectedNode.id}</p>
                  <Input
                    value={editedLabel}
                    onChange={handleLabelChange}
                    placeholder="Label"
                  />
                </>
              )}
            </div>
            <DrawerFooter className="flex justify-between">
              <Button onClick={handleSave}>Save</Button>
              <Button variant="destructive" onClick={handleDelete}>Delete</Button>
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
