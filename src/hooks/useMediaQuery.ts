import { useEffect, useState } from "react";

export default function useMediaQuery(query: string) {
  // Create a MediaQueryList object based on the provided query
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    // Check if the initial state matches the media query and update if needed
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    // Create a listener function to respond to media query changes
    function listener() {
      setMatches(media.matches);
    }
    // Add the listener to the window's resize event
    window.addEventListener("resize", listener);
    // Clean up the listener when the component unmounts
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}

/*
Overview

    The useMediaQuery custom hook is a React utility designed to track changes in a specified media query. It allows you to conditionally render components or apply styles based on the current state of the media query. This hook returns a boolean value indicating whether the media query is currently matching or not.

Behavior

    The hook initializes with the initial state of the media query.
    It updates the matches state whenever the media query's state changes, typically due to window resizing.
    The hook also registers a window resize event listener to update the matches state whenever the viewport dimensions change.
    When the component using this hook unmounts, it removes the event listener to prevent memory leaks.

Tips

    Make sure to specify valid media queries.
    Use this hook within functional components to leverage its reactivity.
    Avoid unnecessary re-renders by using the hook with stable queries (queries that don't change often).
    Be mindful of performance implications when using this hook with complex queries or frequent updates.
*/
