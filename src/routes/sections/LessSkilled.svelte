<script>
  import { Grid, Row, Column } from "carbon-components-svelte";
  import { db } from "../../assets/db";
</script>

<h3>Less Experience</h3>
<Grid>
  <Row>
    <Column>
      <p>
        These are the framework/database that I am less experience with.
        Nevertheless, I am still going to check them out again in the future to
        explore their potential.
      </p></Column
    >
  </Row>
  <Row noGutter={true} style="display:flex; justify-content: center;">
    {#each db.lessExperienceTools as tool}
      <Column sm={2} md={2} lg={3} xlg={3} max={3}>
        <div class="card">
          <img style="width:90%;" src={tool.logo} alt={tool.name} />
        </div>
        <p>{tool.name}</p>
      </Column>
    {/each}
  </Row>
</Grid>

<style>
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    padding-bottom: 0;
  }
</style>
