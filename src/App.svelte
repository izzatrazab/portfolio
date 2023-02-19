<script lang="ts">
  import db from "./assets/db.json";
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

  import Intro from "./routes/sections/Intro.svelte";
  import Skills from "./routes/sections/Skilled.svelte";
  import LogoGithub from "carbon-icons-svelte/lib/LogoGithub.svelte";
  import LessSkilled from "./routes/sections/LessSkilled.svelte";
  let isSideNavOpen = false;

  onMount(async () => {});

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
  href="#intro"
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
  <section id="intro" class="contain">
    <Intro />
  </section>
  <hr />
  <section id="section-2" class="contain">
    <Skills />
  </section>
  <hr />
  <section id="section-3" class="contain">
    <LessSkilled />
  </section>
</Content>

<style>
  .contain {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
  }
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
  #intro {
    padding-top: 5rem;
  }
</style>
