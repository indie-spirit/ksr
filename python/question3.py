""" Question 3 — Vanishing Path Teleportation
Title: Shortest Path with Self-Destructing Cells
Description:
Grid symbols:

. walkable
# blocked
digits 1–9: stepping costs extra energy
T: teleport cells (can teleport to any other T at cost 0)
You start at S with energy E.
Each move costs 1 energy.
Reaching cell with digit d costs 1 + d.
Goal: reach X without energy going negative.

Output the minimum number of steps, not energy.

Conditions:
1 ≤ N,M ≤ 2000
Energy E ≤ 10^12
Teleportation optional
Must use BFS / Dijkstra hybrid
Sample Input:
4 5 20
S..#T
.3.#.
..#.T
T...X
Sample Output:
7"""