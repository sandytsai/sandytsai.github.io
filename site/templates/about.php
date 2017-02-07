<?php snippet('header') ?>

  <main class="main" role="main">

<section class="project-content"
    <div class="wrap">

      <header>
        <div class="intro text">
          <?= $page->intro()->kirbytext() ?>
        </div>
        <hr />
      </header>

      <div class="text">
        <?= $page->text()->kirbytext() ?>
      </div>

    </div>

</section>

  </main>

<?php snippet('footer') ?>
