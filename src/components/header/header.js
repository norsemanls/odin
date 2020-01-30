import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Logo from "../logo/logo";
import "./header.scss";

function Header({ children }) {
  return (
    <>
      <Container maxWidth={false} component="header">
        <Grid m="1rem" direction="row" className="site-header">
          <Grid container item xs={12} sm={6}>
            <Logo />
          </Grid>
          <Grid container item sm={5} xsDown>
            <em>
              Call Today:{" "}
              <a href="tel:18477215308" class="phone-link">
                (847) 721-5308
              </a>
            </em>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Header;
