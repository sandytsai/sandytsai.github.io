<?php snippet('header') ?>

  <main class="main" role="main">
<section class="project-content">
    <header class="wrap">
      <h1><?= $page->title()->html() ?></h1>

    </header>

    <div class="text wrap">

      <?= $page->text()->kirbytext() ?>



      <?php foreach($projects as $project: ?>
<article>
  <?php if($project->template() == 'project.video'): ?>

//

  <?php elseif($project->template() == 'project.default'): ?>

//

  <?php endif ?>
</article>
<?php endforeach ?>

<!-- <?php
      foreach($page->images()->sortBy('sort', 'asc') as $image): ?>
        <figure>
          <p class="imgtitle">
            <?php echo html($image->title()) ?>
          </p>
          <img src="<?= $image->url() ?>" alt="<?= $page->title()->html() ?>" />
          <span class="caption">
            <?php echo html($image->caption()) ?>
          </span>
          </figure>
      <?php endforeach ?> -->

    </div>

</section>
  </main>

<?php snippet('footer') ?>
