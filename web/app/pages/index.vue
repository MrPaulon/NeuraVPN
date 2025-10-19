<script setup lang="ts">
const links = ref([
  {
    label: 'Utiliser',
    color: 'primary',
  },
  {
    label: 'Github',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])

</script>

<template>
  <UContainer class="py-16 text-center space-y-12">
    <div>
      <h1 class="text-5xl font-bold text-gray-900 dark:text-white">
        Bienvenue sur <span class="text-primary">NeuraVPN</span>
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300 mt-4">
        Naviguez librement et en toute sécurité avec notre VPN moderne.
      </p>
      <UButton color="primary" size="lg" to="/register" class="mt-8">
        Commencer gratuitement
      </UButton>
    </div>
  </UContainer>

  <!-- Pourquoi choisir NeuraVPN ? Section -->
  <section class="bg-gray-50 dark:bg-gray-900 py-16 rounded-xl">
    <UContainer>
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
        Pourquoi choisir NeuraVPN&nbsp;?
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="flex flex-col items-center text-center">
          <div class="bg-primary/10 text-primary rounded-full p-4 flex items-center justify-center mb-4">
            <Icon name="material-symbols:shield-lock-rounded" style="color: var(--color-primary);" class="h-10 w-10" />
          </div>
          <h3 class="text-xl font-semibold mb-2">Connexion sécurisée</h3>
          <p class="text-gray-500 dark:text-gray-400">Vos données sont chiffrées avec WireGuard de bout en bout.</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <div class="bg-primary/10 text-primary rounded-full p-4 flex items-center justify-center mb-4">
            <Icon name="material-symbols:visibility-off-rounded" style="color: var(--color-primary);" class="h-10 w-10" />
          </div>
          <h3 class="text-xl font-semibold mb-2">Aucune trace</h3>
          <p class="text-gray-500 dark:text-gray-400">Politique 100% no-logs.</p>
        </div>
        <div class="flex flex-col items-center text-center">
          <div class="bg-primary/10 text-primary rounded-full p-4 flex items-center justify-center mb-4">
            <Icon name="material-symbols:network-check-outline-rounded" style="color: var(--color-primary);" class="h-10 w-10" />
          </div>
          <h3 class="text-xl font-semibold mb-2">Rapide & stable</h3>
          <p class="text-gray-500 dark:text-gray-400">Serveurs optimisés dans plusieurs pays.</p>
        </div>
      </div>
    </UContainer>
  </section>

  <!-- Testimonials Section -->
  <section class="py-16 rounded-xl">
    <UPageCTA
    title="Open-source et communautaire"
    description="NeuraVPN est un projet open-source et communautaire. Nous sommes fiers de proposer un VPN de qualité. Un service 100% made in France"
    orientation="horizontal"
    variant="soft"
    :links="links"
    >
      <img
        src="/logo_sans_fond.png"
        alt="NeuraVPN Logo"
        class="w-full rounded-lg"
      />
    </UPageCTA>
  </section>

  <!-- FAQ Section -->
  <section class="py-16">
    <UContainer>
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
        Foire aux questions (FAQ)
      </h2>
      <div class="max-w-3xl mx-auto space-y-4 text-left">
        <details class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow cursor-pointer">
          <summary class="font-semibold text-lg">NeuraVPN conserve-t-il mes données ?</summary>
          <p class="mt-2 text-gray-600 dark:text-gray-300">Non, NeuraVPN applique une politique stricte de non-journalisation.</p>
        </details>
        <details class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow cursor-pointer">
          <summary class="font-semibold text-lg">Puis-je utiliser NeuraVPN sur plusieurs appareils ?</summary>
          <p class="mt-2 text-gray-600 dark:text-gray-300">Oui, vous pouvez connecter plusieurs appareils simultanément avec un seul compte.</p>
        </details>
        <details class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow cursor-pointer">
          <summary class="font-semibold text-lg">Quelle est la vitesse moyenne ?</summary>
          <p class="mt-2 text-gray-600 dark:text-gray-300">Nos serveurs optimisés offrent des connexions rapides et stables, même sur de longues distances.</p>
        </details>
      </div>
    </UContainer>
  </section>

  <!-- Témoignages Section -->
  <section class="py-16">
    <UContainer>
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
        Ce que disent nos utilisateurs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col">
          <p class="text-lg italic text-gray-700 dark:text-gray-200 mb-4">“NeuraVPN m’a permis d’accéder à tous mes sites préférés, même à l’étranger. La vitesse est impressionnante !”</p>
          <span class="font-semibold text-primary">— Marie D.</span>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col">
          <p class="text-lg italic text-gray-700 dark:text-gray-200 mb-4">“Le support client est ultra réactif. Je me sens vraiment en sécurité avec NeuraVPN.”</p>
          <span class="font-semibold text-primary">— Jean L.</span>
        </div>
      </div>
    </UContainer>
  </section>

  <!-- Call To Action Section -->
  <section class="bg-primary py-16 rounded-xl">
    <UContainer class="text-center">
      <h2 class="text-4xl font-extrabold text-white mb-4">Essayez NeuraVPN dès aujourd’hui</h2>
      <p class="text-lg text-primary-100 mb-8">Protégez votre vie privée et profitez d’Internet sans limites.</p>
      <UButton color="neutral" variant="subtle" size="lg" to="/register" class="font-bold">
        Essayer maintenant
      </UButton>
    </UContainer>
  </section>
</template>