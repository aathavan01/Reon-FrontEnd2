import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer" class="footer Dark">
        <div class="copyright">
          &copy; Copyright <strong><span>RE<span>O</span>N</span></strong>. All Rights Reserved
        </div>
      </footer>
      {/* <!-- End Footer --> */}

      <Link to="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></Link>
    </>
  )
}

export default Footer