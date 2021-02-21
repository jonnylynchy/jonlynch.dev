import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";

const Bouncer = ({ children }) => {
    const { ref, playState } = useWebAnimations({ 
      ...bounce,
      timing: {
        delay: 500, // Start with a 500ms delay
        duration: 1000, // Run for 1000ms
        iterations: 1000, // Repeat once
        easing: "ease-in-out", // Use a fancy timing function
      },  
    });
  
    return (
      <div ref={ref}>{children}</div>
    );
  };

  export default Bouncer;