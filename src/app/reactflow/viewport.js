"use client";

import { Button } from "@/components/ui/button";
import React, { useState, useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { initialNodes } from "./nodes";
import { initialEdges } from "./edges";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerTrigger,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import "../../app/style.css";
import { Maximize2, Minimize2 } from "lucide-react"

function Viewport() {
  const [selectedNode, setSelectedNode] = useState(null);
  const onNodeClick = useCallback((_, node) => {
    setSelectedNode(node);
  }, []);

  const closeDrawer = () => setSelectedNode(null);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const [isExpanded, setIsExpanded] = useState(false)

  // const onNodeDrag = (event, node) => {
  //   console.log('Node clicked:', node);
  // };

  return (
    <ReactFlowProvider>
      <div style={{ height: "100%" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          onConnect={onConnect}
          panOnDrag={true}
          selectionOnDrag
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
        <Drawer className="w-full"
          direction="right"
          open={!!selectedNode}
          onOpenChange={(val) => !val && closeDrawer()}
        >
        {/* <DrawerTrigger id="drawer-trigger" aria-controls="my-drawer">Open</DrawerTrigger> */}
          <DrawerContent>
            <DrawerHeader>
              <div className="flex justify-between pb-0">
                <div className="flex gap-2">
                  <DrawerClose>
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-panel-right-close"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                          <path d="M15 3v18"></path>
                          <path d="m8 9 3 3-3 3"></path>
                        </svg>
                      </button>
                  </DrawerClose>
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                    disabled>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-maximize"
                    >
                      <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
                      <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
                      <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
                      <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
                    </svg>
                  </button>
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                    disabled>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-columns2"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M12 3v18"></path>
                    </svg>
                  </button>
                </div>
                <div class="flex gap-2">
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                    disabled>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-link"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </button>
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                    disabled>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-ellipsis-vertical"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>
              <DrawerTitle className="text-2xl font-bold">
                Second Page
              </DrawerTitle>
              <br />
              <DrawerDescription>
                {/* <div>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                </div> */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap gap-2 items-center">
                    <small className="w-32 text-sm font-medium leading-none">
                      Parent
                    </small>
                    <div className="flex flew-wrap gap-2 h-fit">
                      <Badge>Parent Page</Badge>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center">
                    <small className="w-32 text-sm font-medium leading-none">
                      Children
                    </small>
                    <div className="flex flew-wrap gap-2 h-fit">
                      <Badge>Red</Badge>
                      <Badge>+2</Badge>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center">
                    <small className="w-32 text-sm font-medium leading-none">
                      Links
                    </small>
                    <div className="flex flew-wrap gap-2 h-fit">
                      <Badge>Goanna</Badge>
                      <Badge>+1</Badge>
                    </div>
                  </div>
                </div>
              </DrawerDescription>
              {/* <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label="Toggle Expand"
              >
                {isExpanded ? <Minimize2 /> : <Maximize2 />}
              </Button> */}
            </DrawerHeader>
            <br />
            <hr />
            <div className="overflow-y-auto overflow-x-hidden">
              <div>
                <h2 className="text-2xl font-bold pl-4"> Hi there,</h2>
                <br />
                <p className="pl-5 pr-5 text-justify">
                  this is a <em>basic</em> example of <strong>tiptap</strong>.
                  Sure, there are all kind of basic text styles you’d probably
                  expect from a text editor. But wait until you see the lists:
                </p>
              </div>
              <br />
              <div>
                <ul className="list-disc pl-5 pr-5 text-justify custom-bullet">
                  <li>
                    <p>That’s a bullet list with one …</p>
                  </li>
                  <li>
                    <p>… or two list items.</p>
                  </li>
                </ul>
              </div>
              <br />
              <div>
                <p className="pl-5 pr-5 text-justify">
                  Isn’t that great? And all of that is editable. But wait,
                  there’s more. Let’s try a code block:
                </p>
              </div>
              <br />
              <div className="pl-5 pr-5">
                <pre className="bg-[#1e293b] text-white rounded-md p-4 overflow-x-auto">
                  <code className="language-css">
                    {`body {
  display: none;
}`}
                  </code>
                </pre>
              </div>
              <br />
              <div>
                <p className="pl-5 pr-5 text-justify">
                  I know, I know, this is impressive. It’s only the tip of the
                  iceberg though. Give it a try and click a little bit around.
                  Don’t forget to check the other examples too.
                </p>
              </div>
              <br />
              <div className="p-4">
                {/* <blockquote><p>Wow, that’s amazing. Good work, boy! 👏 <br/>— Mom</p></blockquote> */}
                <blockquote className="border-l-4 border-black-300 pl-4 italic text-gray-600">
                  “Wow, that’s amazing. Good work, boy! 👏
                  <footer className="mt-2 text-sm text-gray-500">— Mom”</footer>
                </blockquote>
              </div>
              <br />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Notes</h2>
                  <Button className="bg-black text-white px-2 py-1 flex items-center gap-2 cursor-pointer rounded-md">
                    <span className="text-white text-lg">＋</span> New Note
                  </Button>
                </div>
              </div>
              <br />
              <div className="p-4">
                <div className="rounded-xl border text-card-foreground p-4 bg-transparent min-h-40 cursor-pointer">
                  <div className="flex gap-4">
                    <div className="max-w-32 w-full aspect-square bg-secondary rounded-lg"></div>
                    <div className="flex flex-col gap-2 justify-between">
                      <div>
                        <h3 className="font-semibold">Note Title</h3>
                        <p className="text-sm text-muted-foreground line-clamp-3 text-justify">
                          Lorem Ipsum, often referred to as lipsum, is a widely
                          used placeholder text in graphic design, publishing,
                          and web development. Here’s a detailed overview of its
                          origins, usage, and significance.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 items-center justify-between">
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 max-w-[126px] truncate inline-block">
                            Tag 1
                          </div>
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                            +2
                          </div>
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground min-w-fit">
                          04 Jan 24
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="rounded-xl border text-card-foreground p-4 bg-transparent min-h-40 cursor-pointer">
                  <div className="flex gap-4">
                    <div className="max-w-32 w-full aspect-square bg-secondary rounded-lg"></div>
                    <div className="flex flex-col gap-2 justify-between">
                      <div>
                        <h3 className="font-semibold">Note Title</h3>
                        <p className="text-sm text-muted-foreground line-clamp-3 text-justify">
                          Lorem Ipsum, often referred to as lipsum, is a widely
                          used placeholder text in graphic design, publishing,
                          and web development. Here’s a detailed overview of its
                          origins, usage, and significance.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 items-center justify-between">
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 max-w-[126px] truncate inline-block">
                            Tag 1
                          </div>
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                            +2
                          </div>
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground min-w-fit">
                          04 Jan 24
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="rounded-xl border text-card-foreground p-4 bg-transparent min-h-40 cursor-pointer">
                  <div className="flex gap-4">
                    <div className="max-w-32 w-full aspect-square bg-secondary rounded-lg"></div>
                    <div className="flex flex-col gap-2 justify-between">
                      <div>
                        <h3 className="font-semibold">Note Title</h3>
                        <p className="text-sm text-muted-foreground line-clamp-3 text-justify">
                          Lorem Ipsum, often referred to as lipsum, is a widely
                          used placeholder text in graphic design, publishing,
                          and web development. Here’s a detailed overview of its
                          origins, usage, and significance.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 items-center justify-between">
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 max-w-[126px] truncate inline-block">
                            Tag 1
                          </div>
                          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                            +2
                          </div>
                        </div>
                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground min-w-fit">
                          04 Jan 24
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Resources</h2>
                  <Button className="bg-secondary text-black hover:text-white-700 px-2 py-1 flex items-center gap-2 cursor-pointer rounded-md">
                    <span className="text-white text-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="text-black lucide lucide-settings2"
                      >
                        <path d="M20 7h-9"></path>
                        <path d="M14 17H5"></path>
                        <circle cx="17" cy="17" r="3"></circle>
                        <circle cx="7" cy="7" r="3"></circle>
                      </svg>
                    </span>{" "}
                    View
                  </Button>
                  <Button className="bg-black text-white px-2 py-1 flex items-center gap-2 cursor-pointer rounded-md">
                    <span className="text-white text-lg">＋</span> New Resource
                  </Button>
                </div>
              </div>
              <br />
              <div className="p-4">
                <div className="flex flex-col gap-4">
                  <h2 class="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Group 1
                  </h2>
                  <div class="flex flex-wrap items-center gap-4 w-full">
                    <div class="flex flex-wrap gap-2 w-1/3 flex-1">
                      <div class="bg-secondary rounded-lg aspect-square flex items-center justify-center w-full cursor-pointer"></div>
                      <div class="flex flex-col gap-1 cursor-pointer">
                        <p class="text-sm text-muted-foreground line-clamp-3">
                          Title
                        </p>
                        <small class="w-32 text-sm font-medium leading-none">
                          Author
                        </small>
                      </div>
                    </div>
                    <div class="flex flex-wrap gap-2 w-1/3 flex-1">
                      <div class="bg-secondary rounded-lg aspect-square flex items-center justify-center w-full cursor-pointer"></div>
                      <div class="flex flex-col gap-1 cursor-pointer">
                        <p class="text-sm text-muted-foreground line-clamp-3">
                          Title
                        </p>
                        <small class="w-32 text-sm font-medium leading-none">
                          Author
                        </small>
                      </div>
                    </div>
                    <div class="flex flex-wrap gap-2 w-1/3 flex-1">
                      <div class="bg-secondary rounded-lg aspect-square flex items-center justify-center w-full cursor-pointer"></div>
                      <div class="flex flex-col gap-1 cursor-pointer">
                        <p class="text-sm text-muted-foreground line-clamp-3">
                          Title
                        </p>
                        <small class="w-32 text-sm font-medium leading-none">
                          Author
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="p-4">
                <div className="flex flex-col gap-4">
                  <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Group 2
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 w-full">
                    <div className="flex flex-wrap gap-2 w-1/3 flex-1">
                      <div className="bg-secondary rounded-lg aspect-square flex items-center justify-center w-full cursor-pointer"></div>
                      <div className="flex flex-col gap-1 cursor-pointer">
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          Title
                        </p>
                        <small className="w-32 text-sm font-medium leading-none">
                          Author
                        </small>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 w-1/3 flex-1">
                      <div className="bg-secondary rounded-lg aspect-square flex items-center justify-center w-full cursor-pointer"></div>
                      <div className="flex flex-col gap-1 cursor-pointer">
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          Title
                        </p>
                        <small className="w-32 text-sm font-medium leading-none">
                          Author
                        </small>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 w-1/3 flex-1">
                      <div className="bg-secondary rounded-lg aspect-square flex items-center justify-center w-full cursor-pointer"></div>
                      <div className="flex flex-col gap-1 cursor-pointer">
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          Title
                        </p>
                        <small className="w-32 text-sm font-medium leading-none">
                          Author
                        </small>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 w-1/3 flex-1">
                      <div className="bg-secondary rounded-lg aspect-square flex items-center justify-center w-full cursor-pointer"></div>
                      <div className="flex flex-col gap-1 cursor-pointer">
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          Title
                        </p>
                        <small className="w-32 text-sm font-medium leading-none">
                          Author
                        </small>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 w-1/3 flex-1">
                      <div className="bg-secondary rounded-lg aspect-square flex items-center justify-center w-full cursor-pointer"></div>
                      <div className="flex flex-col gap-1 cursor-pointer">
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          Title
                        </p>
                        <small className="w-32 text-sm font-medium leading-none">
                          Author
                        </small>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 w-1/3 flex-1">
                      <div className="bg-secondary rounded-lg aspect-square flex items-center justify-center w-full cursor-pointer"></div>
                      <div className="flex flex-col gap-1 cursor-pointer">
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          Title
                        </p>
                        <small className="w-32 text-sm font-medium leading-none">
                          Author
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="p-4">
                {selectedNode && (
                  <>
                    <p>
                      <strong>ID:</strong> {selectedNode.id}
                    </p>
                    <p>
                      <strong>Label:</strong> {selectedNode.data?.label}
                    </p>
                  </>
                )}
              </div> */}
            </div>
            {/* <DrawerClose className="absolute top-2 right-2 text-sm text-muted-foreground">
              Close
            </DrawerClose>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </div>
    </ReactFlowProvider>
  );
}

export default Viewport;
