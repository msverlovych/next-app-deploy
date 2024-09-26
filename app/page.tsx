import Image from "next/image";
import styles from "./page.module.css";

async function fetchProduct() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/1`);
  if (!res.ok) throw new Error('Failed to fetch data');
  
  return res.json();
}

export default async function Home() {
  const product = await fetchProduct();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section id="home">
          <div className="container">
            <h1 className={styles.mainTitle}>Next App Deploy</h1>
            <div className="product-card">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="product-image"
              />
              <div className="product-details">
                <h1 className="product-title">{product.title}</h1>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
