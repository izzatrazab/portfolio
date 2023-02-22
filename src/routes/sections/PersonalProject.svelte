<script>
  import { Grid, Row, Column, Tag } from "carbon-components-svelte";
  import { db } from "../../assets/db";
</script>

<h3>Personal Project</h3>
<Grid>
  <Row style="display:flex; justify-content: center; text-align: justify">
    <Column sm={4} md={8} lg={8} xlg={8} max={8}>
      <article style="margin-bottom: 3em">
        <p>
          This is my personal project I did during free time. In the future I
          might create more mini project to improve my skills (if time permits).
        </p>
      </article>
    </Column>
  </Row>
  <Row style="display:flex; justify-content: center; text-align: justify">
    <Column sm={4} md={4} lg={8} xlg={8} max={8}>
      <article id="tile">
        <h5>{db.personalProject.jomTaip.name}</h5>
        <img src={db.personalProject.jomTaip.img} alt="kakitangan 01" />
        <section id="description">
          <p>
            {db.personalProject.jomTaip.description}
          </p>
        </section>
        {#each db.personalProject.jomTaip.tools as tool}
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
    max-height: 100px;
    overflow: scroll;
  }
</style>
