import React, { useState, useCallback } from "react";
import ReactFlow, { applyEdgeChanges, applyNodeChanges } from "reactflow";
import "reactflow/dist/style.css";
import initialNodes, { initialEdges } from "../nodes-edges";
import "../TimelineMindmap.css";
import InfoModal from "./InfoModal";
import InfoBox from "./InfoBox";

// Main TimelineMindmap component
function TimelineMindmap() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  // Function to handle node hover events
  function handleNodeHover(event, node) {
    // To display info about the node
    const tooltip = document.getElementById("tooltip");
    if (tooltip) {
      tooltip.style.top = `${event.clientY}px`;
      tooltip.style.left = `${event.clientX}px`;
      tooltip.style.visibility = "visible";
      tooltip.style.backgroundColor = "#f0f0f0";
    }
  }

  // Function to handle node hover out events
  function handleNodeLeave(event, node) {
    const tooltip = document.getElementById("tooltip");
    if (tooltip) {
      tooltip.style.visibility = "hidden";
    }
  }

  // Function to handle node click events
  const handleNodeClick = (event, node) => {
    setModalContent(node.data);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="timeline-mindmap"
      style={{ width: "100vw", height: "100vh" }}
    >
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onNodeMouseEnter={handleNodeHover}
        onNodeMouseLeave={handleNodeLeave}
        onNodeClick={handleNodeClick}
        // fitView
      ></ReactFlow>
      <InfoModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        modalContent={modalContent}
      />
      <div className="tooltip" id="tooltip">
        <InfoBox />
      </div>
    </div>
  );
}

export default TimelineMindmap;
