// Define the initial nodes and edges
const initialNodes = [
  // Phases
  {
    id: "1R",
    data: { label: "Market Research" },
    position: { x: 100, y: 200 },
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#0B60B0", fontSize: 16, color: "#ffffff" },
  },
  {
    id: "2P",
    data: { label: "Planning" },
    position: { x: 100, y: 320 },
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#40A2D8", fontSize: 16 },
  },
  {
    id: "3D",
    data: { label: "Designing" },
    position: { x: 100, y: 440 },
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#FF5B22", fontSize: 16 },
  },
  {
    id: "4M",
    data: { label: "Manufacturing" },
    position: { x: 100, y: 560 },
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#9DB2BF", fontSize: 16 },
  },
  {
    id: "5S",
    data: { label: "Sales / Marketing" },
    position: { x: 100, y: 680 },
    // type: "output",
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#7868E6", fontSize: 16 },
  },

  // Sub-phase under Market Research
  {
    id: "6",
    data: { label: "External" },
    position: { x: 400, y: 170 },
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#0B60B0", fontSize: 16, color: "#ffffff" },
  },
  {
    id: "7",
    data: { label: "Internal" },
    position: { x: 400, y: 230 },
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#0B60B0", fontSize: 16, color: "#ffffff" },
  },

  // Sub-phase under External
  {
    id: "8",
    data: { label: "B2C" },
    position: { x: 700, y: 140 },
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#0B60B0", fontSize: 16, color: "#ffffff" },
  },
  {
    id: "9",
    data: { label: "B2C" },
    position: { x: 700, y: 200 },
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#0B60B0", fontSize: 16, color: "#ffffff" },
  },

  // Sub-phase under B2C
  {
    id: "10",
    data: { label: "Online" },
    position: { x: 1000, y: 50 },
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#0B60B0", fontSize: 16, color: "#ffffff" },
  },
  {
    id: "11",
    data: { label: "Interview" },
    position: { x: 1000, y: 110 },
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#0B60B0", fontSize: 16, color: "#ffffff" },
  },
  {
    id: "12",
    data: { label: "Public Data" },
    position: { x: 1000, y: 170 },
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#0B60B0", fontSize: 16, color: "#ffffff" },
  },
  {
    id: "13",
    data: { label: "Health" },
    position: { x: 1000, y: 230 },
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#0B60B0", fontSize: 16, color: "#ffffff" },
  },

  // Sub-phase under Planning
  {
    id: "14",
    data: { label: "PRD" },
    position: { x: 400, y: 290 },
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#40A2D8", fontSize: 16 },
  },
  {
    id: "15",
    data: { label: "Specs" },
    position: { x: 400, y: 350 },
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#40A2D8", fontSize: 16 },
  },

  // Sub-phase under Designing
  {
    id: "16",
    data: { label: "Hardware" },
    position: { x: 400, y: 410 },
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#FF5B22", fontSize: 16 },
  },
  {
    id: "17",
    data: { label: "Software" },
    position: { x: 400, y: 470 },
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#FF5B22", fontSize: 16 },
  },

  // Sub-phase under Manufacturing
  {
    id: "18",
    data: { label: "Material" },
    position: { x: 400, y: 530 },
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#9DB2BF", fontSize: 16 },
  },
  {
    id: "19",
    data: { label: "Production" },
    position: { x: 400, y: 590 },
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#9DB2BF", fontSize: 16 },
  },

  // Sub-phase under Sales / Marketing
  {
    id: "20",
    data: { label: "Online" },
    position: { x: 400, y: 650 },
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#7868E6", fontSize: 16 },
  },
  {
    id: "21",
    data: { label: "Dealership" },
    position: { x: 400, y: 710 },
    sourcePosition: "right",
    targetPosition: "left",
    style: { backgroundColor: "#7868E6", fontSize: 16 },
  },
];

const initialEdges = [
  // Edges connecting Market Research Phase to Sub-phase
  {
    id: "e1R-6",
    source: "1R",
    target: "6",
    type: "step",
    style: { stroke: "#000000", strokeWidth: 2 },
  },
  {
    id: "e1R-7",
    source: "1R",
    target: "7",
    type: "step",
    style: { stroke: "#000000", strokeWidth: 2 },
  },

  // Edges connecting External Phase to their Sub-phase
  {
    id: "e6-8",
    source: "6",
    target: "8",
    type: "step",
    style: { stroke: "#000000", strokeWidth: 2 },
  },
  {
    id: "e6-9",
    source: "6",
    target: "9",
    type: "step",
    style: { stroke: "#000000", strokeWidth: 2 },
  },

  // Edges connecting B2C Phase to their Sub-phase
  {
    id: "e8-10",
    source: "8",
    target: "10",
    type: "step",
    style: { stroke: "#000000", strokeWidth: 2 },
  },
  {
    id: "e8-11",
    source: "8",
    target: "11",
    type: "step",
    style: { stroke: "#000000", strokeWidth: 2 },
  },
  {
    id: "e8-12",
    source: "8",
    target: "12",
    type: "step",
    style: { stroke: "#000000", strokeWidth: 2 },
  },
  {
    id: "e8-13",
    source: "8",
    target: "13",
    type: "step",
    style: { stroke: "#000000", strokeWidth: 2 },
  },

  // Edges connecting Planning Phase to Sub-phase
  {
    id: "e2P-14",
    source: "2P",
    target: "14",
    type: "step",
    style: { stroke: "#000000", strokeWidth: 2 },
  },
  {
    id: "e2P-15",
    source: "2P",
    target: "15",
    type: "step",
    style: { stroke: "#000000", strokeWidth: 2 },
  },

  // Edges connecting Designing Phase to Sub-phase
  {
    id: "e3D-16",
    source: "3D",
    target: "16",
    type: "step",
    style: { stroke: "#000000", strokeWidth: 2 },
  },
  {
    id: "e3D-17",
    source: "3D",
    target: "17",
    type: "step",
    style: { stroke: "#000000", strokeWidth: 2 },
  },

  // Edges connecting Manufacturing Phase to Sub-phase
  {
    id: "e4M-18",
    source: "4M",
    target: "18",
    type: "step",
    style: { stroke: "#000000", strokeWidth: 2 },
  },
  {
    id: "e4M-19",
    source: "4M",
    target: "19",
    type: "step",
    style: { stroke: "#000000", strokeWidth: 2 },
  },

  // Edges connecting Sales / Marketing Phase to Sub-phase
  {
    id: "e5S-20",
    source: "5S",
    target: "20",
    type: "step",
    style: { stroke: "#000000", strokeWidth: 2 },
  },
  {
    id: "e5S-21",
    source: "5S",
    target: "21",
    type: "step",
    style: { stroke: "#000000", strokeWidth: 2 },
  },
];

export default initialNodes;
export { initialEdges };
