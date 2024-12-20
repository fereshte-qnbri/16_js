// ? why event bubbling is bad and how can we prevent it?

// ! Answers ======================================




// it can sometimes lead to undesirable behavior. This is particularly true when you have event listeners on multiple levels of the DOM hierarchy.

// to prevent event bubbling, we can use the stopPropagation() or stopImmediatePropagation()

// Event bubbling is a mechanism in JavaScript where events propagate up the DOM tree from the target element to its parent elements. While this behavior is often useful, it can sometimes lead to unexpected results, particularly when multiple elements have event listeners.

// Why Event Bubbling Can Be Problematic:

// Unintended Consequences: If a parent element also has an event listener for the same event type, it might be triggered unintentionally, leading to unexpected behavior.
// Performance Impact: In complex DOM structures, excessive event bubbling can potentially impact performance, especially when dealing with a large number of event listeners.
// Preventing Event Bubbling:

// To prevent event bubbling, we can use the following methods:

// event.stopPropagation():

// This method stops the propagation of the event to parent elements.
// It's useful when you want to handle the event at the current level and prevent it from affecting parent elements.
// event.stopImmediatePropagation():

// This method stops the propagation of the event immediately, preventing any further event handlers from being triggered.
// It's more restrictive than stopPropagation() and can be useful when you want to completely block the event from being handled by other elements.