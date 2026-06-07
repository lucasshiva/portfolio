<script>
  import IconGithub from "~icons/lucide/github";
  import IconLinkedIn from "~icons/lucide/linkedin";
  import IconEmail from "~icons/lucide/mail";
  import ContactIcon from "./ContactIcon.svelte";

  const linkedinUrl = "https://www.linkedin.com/in/lucasshiva";
  const githubUrl = "https://www.github.com/lucasshiva";
  const emailUrl = "mailto:silva.lucasdev@gmail.com";
</script>

<section id="contact" class="py-24 px-8">
  <div class="max-w-4xl mx-auto text-center">
    <div>
      <h2 class="text-4xl font-bold mb-6">Let's Connect</h2>
      <p class="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
        I'm actively seeking opportunities in software development. Let's discuss how my technical
        expertise can contribute to your team.
      </p>
    </div>

    <div class="flex items-center justify-center gap-4">
      <ContactIcon source={linkedinUrl} icon={IconLinkedIn} />
      <ContactIcon source={githubUrl} icon={IconGithub} />
      <ContactIcon source={emailUrl} icon={IconEmail} />
    </div>

    <div class="mt-12">
      <a
        href={linkedinUrl}
        target="_blank"
        class="inline-block px-8 py-4 bg-primary hover:bg-primary/80 text-primary-foreground rounded-lg font-medium transition-colors"
        >Connect on LinkedIn</a>
    </div>
  </div>
</section>
