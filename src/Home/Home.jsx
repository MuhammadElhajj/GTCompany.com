import "./Home.css";
import Swal from "sweetalert2";
// import LogoPhoto from '../images/GT11.png'

function Home() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3a3492c5-f67d-4843-871e-92d3e7128363");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully",
        icon: "success",
      });
    }
  };
  return (
    <div className="Home">
      {/* <img className="Home__Img" src={LogoPhoto} alt="Logo" /> */}
      <div className="Home__Container">
        <form id="emailForm" onSubmit={onSubmit} method="POST">
          <h1 className="Home__Container__Recipients">
            1 _ Recipients Information
          </h1>
          <div className="Home__Container__Names__Email__Recipients">
            <div className="Recipients__Name">
              <h3 className="Recipients__Name__h3">Names</h3>
              <textarea
                name="first_name_list"
                id="first_name_list"
                placeholder="Recipient names each on a new line. Ex :
1 _ Julia 
2 _ Masa 
          "
                rows="10"
                required=""
                oninput="validateRowCounts()"
              ></textarea>
            </div>
            <div className="Recipients__Email">
            <h3 className="Recipients__Email__h3">Email</h3>
              <textarea
                name="email_list"
                id="email_list"
                placeholder="Recipient emails each on a new line. Ex :
1 _ Julia@gmail.com
2 _ Masa@gmail.com  "
                rows="10"
                required
                oninput="validateRowCounts()"
              ></textarea>
            </div>
          </div>
          <h3 className="Home__Container__From__To">2 _ From & Reply-To</h3>
          <div className="Home__Container__From__To__Container">
            <div className="Home__Container__From__To__Container__From">
              <h3 className="Home__Container__From__Name">From</h3>
              <input
                type="text"
                name="from_name"
                placeholder="From Name"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="From Email"
                required
              />
            </div>
            <div className="Home__Container__From__To__Container__To">
              <h3 className="Home__Container__To__Name">Reply To</h3>
              <input
                type="text"
                name="reply_to_name"
                placeholder="Reply-To Name"
                required
              />
              <input
                type="email"
                name="reply_to_email"
                placeholder="Reply-To Email"
                required
              />
            </div>
          </div>
          <h3 className="Home__Container__From__To">3 _ Title & Email</h3>
          <div className="Home__Container__Title__Email">
            <div className="Home__Container__Title__Email__Email">
            <h3 className="Home__Container__To__Name">Email Title </h3>
            {/* <input
              type="text"
              name="email_title"
              placeholder="Email Title"
              required
            /> */}
            <textarea
              type="text"
              name="email_title"
              placeholder="Email Title"
              required
            >
          </textarea>
            </div>
            <div className="Home__Container__Title__Email__Message">
            <h3 className="Home__Container__To__Name">Message </h3>
            <textarea
              name="email_message"
              placeholder="Email Message (HTML allowed). Use {first_name} to personalize the message."
              rows="10"
              required
            ></textarea>
          </div>
          </div>
          <div className="Home__Container__Chosse__File">
            <h3 className="Home__Container__From__To">4 _ Send File</h3>
            <input type="file" name="attachments[]" id="attachments" multiple />
          </div>

          <div className="Home__Container__Send__Button">
            <button type="submit" id="submitButton">
              Send Emails
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
