import { useMoralis } from "react-moralis"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Home() {
  const { isAuthenticated, authenticate } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) router.replace("/dashboard");
  }, [isAuthenticated]);

  return (
    <button
      className="px-7 py-4 text-xl rounded-xl bg-yellow-300 animate-pulse"
      onClick={() =>
        authenticate({ signingMessage: "Authorize linking of your wallet" })
      }
    >
      Login using Metamask
    </button>
  )
}
