'use client';

import React from 'react';
import { ReactFlow, Background, Controls, ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { initialNodes } from './nodes';
import { initialEdges } from './edges';
 
function Viewport() {
  const handleNodeClick = (event, node) => {
    console.log('Node clicked:', node);
    alert(`Node clicked: ${node.id}`);
  };
  return (
    <ReactFlowProvider>
      <div style={{ height: '100%' }}>
        <ReactFlow nodes={initialNodes} edges={initialEdges} onNodeClick={handleNodeClick} fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}
 
export default Viewport;