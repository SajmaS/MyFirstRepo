import { useEffect, useState } from "react";
import Image from "next/image";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function BGI() {
    const [width, setWidth] = useState(0);
    const [height, setheight] = useState(0);
  
    useEffect(() => {
      const { width, height } = getWindowDimensions();
  
      setWidth(width);
  
      setheight(height);
    }, []);

    useEffect(() => {
        function handleResize() {
          const { width, height } = getWindowDimensions();
    
          setWidth(width);
    
          setheight(height);
        }
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

      if (width && height) {
            return(
            <div>
                <Image 
                    src='/bg.jpg' 
                    alt='' 
                    width={width}
                    height={height}
                    />
            </div>
                );
            }         
        return null;
    }

  export default BGI;