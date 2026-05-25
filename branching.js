//TODO LEARNING HOW BRANCHING WORKS :-

//* METHOD 1 — Using Merge (Most Common) :-
// Switch to main:
// git checkout main
// Then:
// git merge feature-login
// This directly combines branches locally.

//* METHOD 2 — Using Pull :-
// Pull Means :-
// remote branch
// ↓
// download
// ↓
// merge into current branch

// So if you do : git pull origin feature-login
// while on main branch:
// Git will:
// 1. download feature-login from GitHub
// 2. merge it into main

//* Example Flow of PUSH/PULL/PUSH :-
// Step 1 — Push Feature Branch

// From feature branch:
// git push -u origin feature-login

// Now GitHub has:
// feature-login

// Step 2 — Switch To Main
// git checkout main

// Step 3 — Pull Feature Branch Into Main
// git pull origin feature-login

// This does:
// download feature-login
// +
// merge into main

// Step 3 — Then Push Main
// git push origin main

// Now main gets feature code.

//* IMPORTANT UNDERSTANDING
// There are TWO concepts:

// You do NOT need : push → pull → push
// just for local branch merge, That would be unnecessary extra work.

//* Real Local Branch Workflow :-
// git checkout -b feature-login
// # work here

// git add .
// git commit -m "Added login"

// git checkout main
// git merge feature-login
// git push

//* WHEN WOULD PULL BE NEEDED HERE?
// Suppose : teammate updated main branch on GitHub, your local main outdated

// THEN before merge:
// git checkout main
// git pull
// git merge feature-login
// git push

// Now pull becomes necessary.

// Concept	                Purpose
// git push / pull 	    Sync code between local ↔ GitHub
// git merge	        Combine branches(in local) 

// These are NOT competitors, They solve DIFFERENT problems.