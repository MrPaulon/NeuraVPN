<script setup lang="ts">
const vpnInfo = ref({
  publicKey: 'ABC123XYZ',
  server: 'fr1.neuravpn.net',
  ip: '192.168.10.45',
  bandwidth: '1.2 Go / 10 Go',
  status: 'connected',
  connectionTime: '02:34:12'
})

function toggleVPN() {
  vpnInfo.value.status =
    vpnInfo.value.status === 'connected' ? 'disconnected' : 'connected'
}
</script>

<template>
  <UContainer class="py-16 space-y-12">
    <!-- Header -->
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-2">Tableau de Bord</h1>
      <p class="text-gray-500 dark:text-gray-400">
        Gérez votre connexion et vos paramètres VPN en toute simplicité.
      </p>
    </div>

    <!-- Statut de connexion -->
    <UCard
      class="max-w-2xl mx-auto p-8 text-center transition-colors duration-300"
      :class="vpnInfo.status === 'connected' ? 'bg-primary/5' : 'bg-neutral-100 dark:bg-neutral-800'"
    >
      <!-- Icône dynamique -->
      <div class="flex justify-center mb-4">
        <UIcon
          :name="vpnInfo.status === 'connected' ? 'material-symbols:lock-outline' : 'material-symbols:lock-open-outline'"
          class="h-12 w-12"
          :class="vpnInfo.status === 'connected' ? 'text-primary' : 'text-neutral-400'"
        />
      </div>

      <!-- Texte principal -->
      <div
        class="text-2xl font-bold mb-2"
        :class="vpnInfo.status === 'connected' ? 'text-green-500' : 'text-red-500'"
      >
        {{ vpnInfo.status === 'connected' ? 'Connecté' : 'Déconnecté' }}
      </div>

      <!-- Description dynamique -->
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        <span v-if="vpnInfo.status === 'connected'">
          Votre connexion est sécurisée via le serveur <strong>{{ vpnInfo.server }}</strong>.
        </span>
        <span v-else>
          Vous n’êtes actuellement pas connecté à un serveur VPN.
        </span>
      </p>

      <!-- Bouton d’action -->
      <UButton
        :color="vpnInfo.status === 'connected' ? 'neutral' : 'primary'"
        :variant="vpnInfo.status === 'connected' ? 'soft' : 'solid'"
        :icon="vpnInfo.status === 'connected' ? 'material-symbols:power-settings-new-rounded' : 'material-symbols:power-rounded'"
        @click="toggleVPN"
        size="lg"
      >
        {{ vpnInfo.status === 'connected' ? 'Déconnecter' : 'Se connecter' }}
      </UButton>
    </UCard>

    <!-- Informations VPN -->
    <UCard class="max-w-4xl mx-auto p-8 grid grid-cols-1 md:grid-cols-1 gap-10 transition-all duration-300">
      <!-- Bloc gauche : Détails de connexion -->
      <div class="space-y-4">
        <h3 class="text-2xl font-bold flex items-center gap-2">
          <UIcon name="material-symbols:info-outline-rounded" class="text-primary h-6 w-6" />
          Détails de la connexion
        </h3>

        <div class="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-gray-500 dark:text-gray-400">Serveur :</span>
            <span class="font-semibold">{{ vpnInfo.server }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-500 dark:text-gray-400">Adresse IP :</span>
            <span class="font-mono">{{ vpnInfo.ip }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-500 dark:text-gray-400">Clé publique :</span>
            <span class="truncate font-mono">{{ vpnInfo.publicKey }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-500 dark:text-gray-400">Durée de connexion :</span>
            <span>{{ vpnInfo.connectionTime }}</span>
          </div>
        </div>

        <UButton color="neutral" variant="soft" icon="material-symbols:content-copy-rounded" block>
          Copier les informations
        </UButton>
      </div>

      <!-- Bloc droit : Statistiques -->
      <div class="space-y-4" style="margin-top: 40px;">
        <h3 class="text-2xl font-bold flex items-center gap-2">
          <UIcon name="material-symbols:query-stats-rounded" class="text-primary h-6 w-6" />
          Utilisation & performance
        </h3>

        <div class="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4">
          <div class="flex justify-between mb-2">
            <span class="text-gray-500 dark:text-gray-400">Bande passante</span>
            <span class="font-semibold">{{ vpnInfo.bandwidth }}</span>
          </div>
          <div class="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
            <div
              class="bg-primary h-3 transition-all duration-500"
              style="width: 12%"
            ></div>
          </div>

          <div class="grid grid-cols-2 gap-4 mt-6 text-center">
            <div class="p-4 rounded-lg bg-primary/10 dark:bg-primary/20">
              <p class="text-sm text-gray-500 dark:text-gray-300">Ping</p>
              <p class="text-xl font-semibold">38 ms</p>
            </div>
            <div class="p-4 rounded-lg bg-primary/10 dark:bg-primary/20">
              <p class="text-sm text-gray-500 dark:text-gray-300">Débit moyen</p>
              <p class="text-xl font-semibold">120 Mbps</p>
            </div>
          </div>
        </div>

        <UButton color="primary" size="lg" block icon="material-symbols:download-rounded">
          Télécharger la configuration WireGuard
        </UButton>
      </div>
    </UCard>

    <!-- Actions rapides -->
    <UCard class="max-w-4xl mx-auto p-6">
      <h3 class="text-xl font-semibold mb-4 text-center">Actions rapides</h3>
      <div class="flex flex-wrap justify-center gap-4">
        <UButton color="primary" variant="solid">Changer de serveur</UButton>
        <UButton color="neutral" variant="soft">Voir mes appareils</UButton>
        <UButton color="neutral" variant="soft">Contacter le support</UButton>
      </div>
    </UCard>
  </UContainer>
</template>