<script lang="ts">
  import IconBlazor from "~icons/devicon/blazor";
  import IconCsharp from "~icons/devicon/csharp";
  import IconDotnetCore from "~icons/devicon/dotnetcore";
  import IconFastApi from "~icons/devicon/fastapi";
  import IconFlutter from "~icons/devicon/flutter";
  import IconJava from "~icons/devicon/java";
  import IconKotlin from "~icons/devicon/kotlin";
  import IconPython from "~icons/devicon/python";
  import IconSpringBoot from "~icons/devicon/spring";
  import IconTailwind from "~icons/devicon/tailwindcss";
  import IconVue from "~icons/devicon/vuejs";

  let technologies = [
    { name: "Python", icon: IconPython },
    { name: "C#", icon: IconCsharp },
    { name: "Java", icon: IconJava },
    { name: "Kotlin", icon: IconKotlin },
    { name: "Flutter", icon: IconFlutter },
    { name: "Tailwind CSS", icon: IconTailwind },
    { name: "Vue.js", icon: IconVue },
    { name: "Blazor", icon: IconBlazor },
    { name: "FastApi", icon: IconFastApi },
    { name: ".NET Core", icon: IconDotnetCore },
    { name: "Spring Boot", icon: IconSpringBoot },
  ];
</script>

<section id="technologies" class="py-20 px-4 md:px-8 w-full bg-background text-foreground">
  <div class="max-w-6xl mx-auto flex flex-col gap-10 md:gap-20">
    <h2
      class="text-5xl md:text-6xl lg:text-[68px] text-center md:text-left leading-none mb-10 md:mb-5">
      Technologies
    </h2>

    <div class="flex flex-wrap mx-10 justify-center gap-8 md:gap-12 lg:gap-16">
      {#each technologies as { name, icon: Icon }}
        <div class="flex flex-col gap-3 items-center group">
          <Icon
            class="text-5xl md:text-6xl lg:text-7xl transition-transform group-hover:scale-120" />
          <p class="text-lg lg:text-xl text-center font-light">{name}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
