import { z } from 'zod';

export interface IdeaGraph {
  nodes: string[];
  edges: Array<{ source: string; target: string; weight: number }>;
}

export interface HolographicOptions {
  p?: number;           // QAOA layers / radial depth
  lambdaHolo?: number;  // Weight of holographic regularization
  maxIterations?: number;
}

export interface HolographicResult {
  optimalScore: number;
  optimalParams: number[];
  insight: string;
  holographicPenalty: number;
}

/**
 * Derives a lightweight graph representation of the startup idea.
 * Nodes represent key concepts; edges represent implied relationships.
 */
export function deriveIdeaGraph(idea: string): IdeaGraph {
  const lowerIdea = idea.toLowerCase();
  const stopWords = new Set(['the', 'a', 'an', 'and', 'or', 'to', 'for', 'with', 'in', 'on', 'of', 'is', 'are']);

  // Extract potential concepts (simple heuristic; enhance with SphinxOS entity extraction)
  const words = lowerIdea.split(/\s+/)
    .filter(w => w.length > 3 && !stopWords.has(w))
    .slice(0, 12);

  const nodes = Array.from(new Set(words));

  // Create edges between consecutive and randomly selected concepts
  const edges: Array<{ source: string; target: string; weight: number }> = [];
  for (let i = 0; i < nodes.length - 1; i++) {
    edges.push({
      source: nodes[i],
      target: nodes[i + 1],
      weight: 0.6 + Math.random() * 0.4,
    });
  }
  // Add a few cross edges for richer structure
  for (let i = 0; i < Math.floor(nodes.length / 3); i++) {
    const a = Math.floor(Math.random() * nodes.length);
    const b = (a + 3 + Math.floor(Math.random() * 4)) % nodes.length;
    if (a !== b) {
      edges.push({
        source: nodes[a],
        target: nodes[b],
        weight: 0.3 + Math.random() * 0.5,
      });
    }
  }

  return { nodes, edges };
}

/**
 * Runs a simplified Holographic QAOA on the idea graph.
 * Approximates tensor network contraction with variational parameters and holographic regularization.
 */
export async function runHolographicQAOA(
  graph: IdeaGraph,
  options: HolographicOptions = {}
): Promise<HolographicResult> {
  const { p = 3, lambdaHolo = 0.12, maxIterations = 150 } = options;

  // Base energy from graph structure (proxy for problem Hamiltonian expectation)
  const baseEnergy = 40 + (graph.nodes.length * 3.5) + (graph.edges.length * 1.8);

  // Simulate variational optimization (replace with real TN contraction + optimizer in production)
  let bestScore = baseEnergy;
  let bestParams: number[] = [];
  let holographicPenalty = 0;

  for (let iter = 0; iter < maxIterations; iter++) {
    const params = Array.from({ length: 2 * p }, () => Math.random() * 2 * Math.PI);

    // Approximate holographic penalty (e.g., via average "cut" or bond entropy proxy)
    const penalty = (graph.edges.length / (graph.nodes.length + 1)) * 8 + Math.random() * 5;
    holographicPenalty = penalty;

    const energy = baseEnergy + Math.sin(params.reduce((sum, v) => sum + v, 0)) * 12;

    const totalCost = energy + lambdaHolo * penalty;

    if (totalCost < bestScore) {
      bestScore = totalCost;
      bestParams = params;
    }
  }

  const optimalScore = Math.max(15, Math.min(95, Math.round(100 - bestScore + 20)));

  const insight = graph.nodes.length > 6
    ? 'Strong conceptual entanglement detected in the holographic bulk – high innovation coherence.'
    : 'Sparse holographic geometry observed. Expanding key market or feasibility nodes may improve optimization.';

  return {
    optimalScore,
    optimalParams: bestParams.slice(0, 6), // Limit for response brevity
    insight,
    holographicPenalty: Math.round(holographicPenalty * 10) / 10,
  };
}
