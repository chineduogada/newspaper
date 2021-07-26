import { useEffect, useState } from "react";

/**
 * Get rid of Hydration Errors. e.g: `Warning: Text content did not match. Server: "HI" Client: "Hello" ...`
 *
 * This Hook makes sure that the `page` is ready on the `Client`(Browser)
 *
 * @example
 * //...
 * const ready = usePageReady()
 *
 * return ready && <ShowThePageContent />
 * //...
 */
const usePageReady = () => {
  // Page is not Ready on the Client yet
  const [ready, setReady] = useState(false);

  // After Hydration (the `Client` has completed Detached from the `Server`) then the page should have mounted, and is very `Ready`
  useEffect(() => {
    setReady(true);
  }, []);

  return ready;
};

export default usePageReady;
