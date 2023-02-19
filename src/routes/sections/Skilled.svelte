<script>
  import { Grid, Row, Column } from "carbon-components-svelte";
  import { Tools } from "carbon-icons-svelte";
  import { db } from "../../assets/db";
</script>

<h3>Skills</h3>
<Grid>
  <Row>
    <Column>
      <p>
        These are the framework/database that I'm confident with. As far as I
        remember, I used them the longest if compared to others.
      </p>
    </Column>
  </Row>
  <Row noGutter={true} style="display:flex; justify-content: center;">
    {#each db.confidentTools as tool}
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
