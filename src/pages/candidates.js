import Navbar from "../components/Navbar";

export default function Example() {
  return (
    <>
      <Navbar />
      <div className="form">
        <div className="form-content">
          <h3>Candidates information</h3>
          <p>Personal details and application.</p>
        </div>
      </div>
      <div>
        <dl>
          <div>
            <dt>Full name</dt>
            <dd>Margot Foster</dd>
          </div>
        </dl>
      </div>
    </>
  );
}
