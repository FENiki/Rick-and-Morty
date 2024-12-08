export default function Panel({ children, title }) {
  return (
    <div>
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    </div>
  );
}
