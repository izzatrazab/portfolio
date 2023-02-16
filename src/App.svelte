<script lang="ts">
  import db from "./assets/db.json";
  import Counter from "./lib/Counter.svelte";
  import { onMount } from "svelte";
  import Email from "carbon-icons-svelte/lib/Email.svelte";
  import {
    Header,
    HeaderActionLink,
    HeaderUtilities,
    SideNav,
    SideNavItems,
    SideNavLink,
    Content,
  } from "carbon-components-svelte";

  import LogoGithub from "carbon-icons-svelte/lib/LogoGithub.svelte";
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "./assets/vite.svg";
  import carbonDesignSystemLogo from "./assets/Carbon Design System.png";
  let isSideNavOpen = false;

  onMount(async () => {
    console.log(db.contact);
  });

  function scrollIntoView({ target }) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
</script>

<Header
  company="Izzat Razab"
  platformName="Portfolio"
  bind:isSideNavOpen
  href="#section-1"
  on:click={scrollIntoView}
>
  <HeaderUtilities>
    <HeaderActionLink href="#section-3" onclick={scrollIntoView}>
      Personal Project
    </HeaderActionLink>
    <HeaderActionLink
      href="https://github.com/{db.contact.github}"
      icon={LogoGithub}
      target="_blank"
    />
    <HeaderActionLink href="mailto: {db.contact.email}" icon={Email} />
  </HeaderUtilities>
</Header>
<!-- <SideNav bind:isOpen={isSideNavOpen}>
  <SideNavItems>
    <SideNavLink text="Link 1" />
    <SideNavLink text="Link 2" />
    <SideNavLink text="Link 3" />
  </SideNavItems>
</SideNav> -->
<Content style="padding-top:0px; margin-top:0px">
  <section id="section-1">
    <p>
      This is my portfolio/resume built using
      <a
        href="https://svelte.dev"
        target="_blank"
        rel="noreferrer"
        style="color:#FF6432"
      >
        Svelte
      </a>,
      <a
        href="https://vitejs.dev"
        target="_blank"
        rel="noreferrer"
        style="color:cornflowerblue"
      >
        Vite
      </a>,
      <a
        href="https://carbon-components-svelte.onrender.com"
        target="_blank"
        rel="noreferrer"
        style="color:lightsteelblue"
      >
        Carbon Svelte
      </a>
    </p>
    <div>
      {#each db.devToolLogos as devToolLogo}
        <a href={devToolLogo.href} target="_blank" rel="noreferrer">
          <img
            src="/portfolio/src/assets/{devToolLogo.imgName}"
            class={devToolLogo.class}
            alt={devToolLogo.alt}
          />
        </a>
      {/each}
    </div>
    <h2>Hi I'm Izzat, This will be my portfolio website soon.</h2>
    <h2>Built by using Vite and Svelte</h2>
  </section>
  <section id="section-2">
    <h1>Section 2</h1>
    <h1>Section 2</h1>
    <h1>Section 2</h1>
    <h1>Section 2</h1>
  </section>
  <section id="section-3">Section 3</section>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</Content>

<style>
  .logo {
    height: 6em;
    padding: 1.2em;
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
  .read-the-docs {
    color: #888;
  }
  #section-1 {
    padding-top: 5rem;
  }
</style>
