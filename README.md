# React Native useEffect Crash with Empty Dependency Array

This repository demonstrates a common, yet often elusive, bug in React Native applications. The issue arises when using the `useEffect` hook with an empty dependency array (`[]`), leading to seemingly random crashes without informative error messages. The root cause typically lies in the mishandling of asynchronous operations within the `useEffect` callback.

## Reproducing the Bug

The `bug.js` file contains the problematic code. Run the React Native app to observe the crash behavior.

## Solution

The `bugSolution.js` file provides a corrected version of the code. This solution addresses the issue by employing the `return` statement within `useEffect` to clean up asynchronous operations before the component unmounts and the use of a state variable to manage asynchronous loading.