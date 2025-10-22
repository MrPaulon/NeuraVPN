<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

const toast = useToast()
const router = useRouter()

const fields: AuthFormField[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Entrez votre email',
    required: true
  },
  {
    name: 'password',
    label: 'Mot de passe',
    type: 'password',
    placeholder: 'Entrez votre mot de passe',
    required: true
  }
]

const providers = [
  {
    label: 'Google',
    icon: 'i-simple-icons-google',
    onClick: () => {
      toast.add({ title: 'Google', description: 'Connexion avec Google' })
    }
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    onClick: () => {
      toast.add({ title: 'GitHub', description: 'Connexion avec GitHub' })
    }
  }
]

// Validation
const schema = z.object({
  email: z.string().email('Adresse e-mail invalide'),
  password: z.string().min(8, 'Le mot de passe doit comporter au moins 8 caractères')
})

type Schema = z.output<typeof schema>

// Soumission du formulaire
async function onSubmit(payload: FormSubmitEvent<Schema>) {
  try {
    const res = await $fetch('/api/users/create', {
      method: 'POST',
      body: {
        email: payload.data.email,
        password: payload.data.password
      }
    })

    if (res.success) {
      toast.add({
        title: 'Compte créé 🎉',
        description: 'Vous pouvez maintenant vous connecter à NeuraVPN.',
        color: 'green'
      })

      // Redirige vers la page de connexion
      router.push('/login')
    } else {
      toast.add({
        title: 'Erreur',
        description: res.message || 'Impossible de créer le compte.',
        color: 'red'
      })
    }
  } catch (error: any) {
    toast.add({
      title: 'Erreur',
      description: error.statusMessage || 'Une erreur est survenue.',
      color: 'red'
    })
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        :fields="fields"
        :providers="providers"
        title="Créer un compte"
        icon="material-symbols:person-add-rounded"
        :submit="{
          label: 'Créer un compte',
          color: 'primary',
          variant: 'solid'
        }"
        @submit="onSubmit"
      >
        <template #description>
          Déjà un compte ?
          <ULink to="/login" class="text-primary font-medium">Connexion</ULink>.
        </template>

        <template #footer>
          En créant un compte, vous acceptez nos
          <ULink to="/terms-of-service" class="text-primary font-medium">
            Conditions d'utilisation
          </ULink>.
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>