declare module 'react-dom/client' {
  import { Container } from 'react-dom';
  
  interface Root {
    render(children: React.ReactNode): void;
    unmount(): void;
  }
  
  export function createRoot(container: Container): Root;
}
