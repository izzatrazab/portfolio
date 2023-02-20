<script>
  import { Grid, Row, Column } from "carbon-components-svelte";

  import svelteLogo from "../../assets/svelte.svg";
  import viteLogo from "../../assets/vite.svg";
  import carbonDesignSystemLogo from "../../assets/Carbon Design System.png";
</script>

<Grid>
  <Row style="display:flex; justify-content: center;">
    <Column sm={4} md={4} lg={8} xlg={10} max={10}>
      <div id="col">
        <p>
          This is my portfolio/resume built using
          <a
            href="https://svelte.dev"
            target="_blank"
            rel="noreferrer"
            style="color:#FF6432; text-shadow:0 0 1px #FF835A"
          >
            Svelte
          </a>,
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noreferrer"
            style="color:#3399FF; text-shadow: 0 0 1px #835aff"
          >
            Vite
          </a>, and
          <a
            href="https://carbon-components-svelte.onrender.com"
            target="_blank"
            rel="noreferrer"
            style="color:lightsteelblue; text-shadow: 0 0 1px #99CCFF "
          >
            Carbon Svelte.
          </a>
        </p>
      </div>
    </Column>
    <Column sm={4} md={4} lg={5} xlg={6} max={6}>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} class="logo vite" alt="Vite Logo" />
      </a>
      <a
        href="https://carbon-components-svelte.onrender.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={carbonDesignSystemLogo}
          class="logo carbon"
          alt="Carbon System Logo"
        />
      </a>
    </Column>
  </Row>
</Grid>

<style>
  p {
    text-align: center;
  }
  #col {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .logo {
    height: 6em;
    padding: 1.2em;
    padding-right: 0.85em;
    padding-left: 0.85em;
    will-change: filter;
  }
  .logo.vite:hover {
    filter: drop-shadow(0 0 2em #646cff);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff4000);
  }
  .logo.carbon:hover {
    filter: drop-shadow(0 0 2em #8ec7ff);
  }
</style>
