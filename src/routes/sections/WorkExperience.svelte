<script>
  import { Grid, Row, Column, Tag } from "carbon-components-svelte";
  import { db } from "../../assets/db";
</script>

<h3>Work Experience</h3>
<Grid>
  <Row style="display:flex; justify-content: center; text-align: justify">
    <Column sm={4} md={8} lg={8} xlg={8} max={8}>
      <article style="margin-bottom: 3em">
        <p>
          My only work experience is my 24 weeks internship at Sultanah Nur
          Zahirah Hospital, Kuala Terengganu (HSNZ) under Information Technology
          department as a web developer. Period: July 2021 - Jan 2022
        </p>
        <p>
          I was working on two projects. Both of them were not use for
          deployment but rather for Proof of Concept (PoC).
        </p>
      </article>
    </Column>
  </Row>
  <Row style="display:flex; justify-content: center; text-align: justify">
    <Column sm={4} md={4} lg={8} xlg={8} max={8}>
      <article id="tile">
        <h5>Staff Management System</h5>
        <img src={db.kakitangan.img[0]} alt="kakitangan 01" />
        <section id="description">
          <p>
            The idea is to unified all staff managements of different department
            to one central platform. The Admin can CRUD staff data and can view
            some charts.
          </p>
        </section>
        {#each db.kakitangan.tools as tool, i}
          <Tag>{tool.name}</Tag>
        {/each}
      </article>
    </Column>
    <Column sm={4} md={4} lg={8} xlg={8} max={8}>
      <article id="tile">
        <h5>Hearse Booking System</h5>
        <img src={db.hearseBooking.img[0]} alt="kakitangan 01" />
        <section id="description">
          <p>
            {db.hearseBooking.description[0]}
          </p>
          <p>
            {db.hearseBooking.description[1]}
          </p>
        </section>
        {#each db.hearseBooking.tools as tool, i}
          <Tag>{tool.name}</Tag>
        {/each}
      </article>
    </Column>
  </Row>
</Grid>

<style>
  img {
    width: 100%;
    border-radius: 6px;
    aspect-ratio: 16/9;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  #tile {
    border-style: solid;
    border-color: rgb(255, 255, 255, 0.1);
    border-width: 1px;
    border-radius: 6px;
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  #tile > h5 {
    text-align: center;
  }
  #description {
    height: 100px;
    overflow: scroll;
  }
</style>
