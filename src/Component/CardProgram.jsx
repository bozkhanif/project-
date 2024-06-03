export default function CardProgram({ judul, Konten }) {
  return (
    <>
      <div className="card mb-3 h-100">
        <div className="card-body d-flex flex-column align-items-center text-center justify-content-center">
          <h5>{judul}</h5>
          <p>{Konten}</p>
        </div>
      </div>
    </>
  );
}
