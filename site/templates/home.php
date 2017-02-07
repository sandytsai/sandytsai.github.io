<?php snippet('header') ?>

  <main class="main" role="main">

    <header class="wrap">
      <div class="intro text">
        <?= $page->intro()->kirbytext() ?>
      </div>
    </header>

    <section class="projects-section">
      <div class="wrap wide">
        <?php snippet('showcase')?>
        <p class="projects-section-more"></p>
      </div>
    </section>

  </main>

<?php snippet('footer') ?>
