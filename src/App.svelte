<script lang="ts">
  import { db } from "./assets/db";
  import { onMount } from "svelte";
  import Email from "carbon-icons-svelte/lib/Email.svelte";
  import {
    Button,
    Content,
    Header,
    HeaderActionLink,
    HeaderUtilities,
    Modal,
    Grid,
    Row,
    Column,
    SideNav,
    SideNavItems,
    SideNavLink,
    SkipToContent,
  } from "carbon-components-svelte";

  import Intro from "./routes/sections/Intro.svelte";
  import Skills from "./routes/sections/Skilled.svelte";
  import LogoGithub from "carbon-icons-svelte/lib/LogoGithub.svelte";
  import LessSkilled from "./routes/sections/LessSkilled.svelte";
  import WorkExperience from "./routes/sections/WorkExperience.svelte";
  import PersonalProject from "./routes/sections/PersonalProject.svelte";
  let isSideNavOpen = false;
  let isBioModalOpen = false;

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
  persistentHamburgerMenu={true}
>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <HeaderUtilities>
    <Button
      kind="ghost"
      style="color:white;
    font-weight: 600;"
      on:click={() => (isBioModalOpen = true)}>Bio</Button
    >
    <Modal bind:open={isBioModalOpen} passiveModal modalHeading="BIODATA">
      <Grid>
        <hr />
        <Row>
          <Column sm={1} md={2}>
            <p id="tableHead">Name:</p>
          </Column>
          <Column>
            <p id="tableContent">{db.biodata.name}</p>
          </Column>
        </Row>
        <hr />
        <Row>
          <Column sm={1} md={2}>
            <p id="tableHead">Age:</p>
          </Column>
          <Column>
            <p id="tableContent">{db.biodata.age}</p>
          </Column>
        </Row>
        <hr />
        <Row>
          <Column sm={1} md={2}>
            <p id="tableHead">Phone:</p>
          </Column>
          <Column>
            <p id="tableContent">{db.biodata.phone}</p>
          </Column>
        </Row>
        <hr />
        <Row>
          <Column sm={1} md={2}>
            <p id="tableHead">Email:</p>
          </Column>
          <Column>
            <p id="tableContent">{db.biodata.email}</p>
          </Column>
        </Row>
        <hr />
        <Row>
          <Column sm={1} md={2}>
            <p id="tableHead">From:</p>
          </Column>
          <Column>
            <p id="tableContent">{db.biodata.from}</p>
          </Column>
        </Row>
        <hr />
        <Row>
          <Column sm={1} md={2}>
            <p id="tableHead">Education:</p>
          </Column>
          <Column>
            <p id="tableContent">{db.biodata.education}</p>
          </Column>
        </Row>
      </Grid>
    </Modal>

    <HeaderActionLink
      href="https://github.com/{db.biodata.github}"
      icon={LogoGithub}
      target="_blank"
    />
    <HeaderActionLink href="mailto: {db.biodata.email}" icon={Email} />
  </HeaderUtilities>
</Header>
<SideNav bind:isOpen={isSideNavOpen}>
  <SideNavItems>
    <SideNavLink text="Skills" href="#section-2" />
    <SideNavLink text="Work Experience" href="#section-3" />
    <SideNavLink text="Less Experience" href="#section-4" />
    <SideNavLink text="Personal Project" href="#section-5" />
  </SideNavItems>
</SideNav>
<Content style="padding-top:0px; margin-top:0px">
  <section id="intro" class="contain">
    <Intro />
  </section>
  <section id="section-2" class="contain">
    <hr />
    <Skills />
  </section>
  <section id="section-3" class="contain">
    <hr />
    <WorkExperience />
  </section>
  <section id="section-4" class="contain">
    <hr />
    <LessSkilled />
  </section>
  <section id="section-5" class="contain">
    <hr />
    <PersonalProject />
  </section>
</Content>

<style>
  .contain {
    padding-top: 2.5rem;
  }
  #intro {
    padding-top: 5rem;
  }
  #tableHead {
    text-align: end;
    padding: 0;
  }

  #tableContent {
    text-align: start;
  }
</style>
