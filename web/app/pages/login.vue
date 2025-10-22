<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

const toast = useToast()
const router = useRouter()

// Champs du formulaire
const fields: AuthFormField[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Entrez votre adresse e-mail',
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

// Validation Zod
const schema = z.object({
  email: z.string().email('Adresse e-mail invalide'),
  password: z.string().min(6, 'Le mot de passe doit comporter au moins 6 caractères')
})

type Schema = z.output<typeof schema>

// Fonction de soumission
async function onSubmit(payload: FormSubmitEvent<Schema>) {
  try {
    const res = await $fetch('/api/users/login', {
      method: 'POST',
      body: {
        email: payload.data.email,
        password: payload.data.password
      }
    })

    if (res.success) {
      toast.add({
        title: 'Connexion réussie',
        description: 'Bienvenue sur NeuraVPN 👋',
        color: 'green'
      })

      // Sauvegarde du token et utilisateur
      localStorage.setItem('token', res.token)
      localStorage.setItem('user', JSON.stringify(res.user))

      // Redirection vers le dashboard
      router.push('/dashboard')
    } else {
      toast.add({
        title: 'Erreur de connexion',
        description: res.message || 'Vérifiez vos identifiants',
        color: 'red'
      })
    }
  } catch (error: any) {
    toast.add({
      title: 'Erreur',
      description: error.statusMessage || 'Impossible de se connecter',
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
        title="Connexion à NeuraVPN"
        icon="material-symbols:person-2-rounded"
        :submit="{
          label: 'Se connecter',
          color: 'primary',
          variant: 'solid'
        }"
        @submit="onSubmit"
      >
        <template #description>
          Pas encore de compte ?
          <ULink to="/register" class="text-primary font-medium">Créer un compte</ULink>.
        </template>

        <template #password-hint>
          <ULink to="#" class="text-primary font-medium" tabindex="-1">Mot de passe oublié ?</ULink>
        </template>

        <template #footer>
          En vous connectant, vous acceptez nos
          <ULink to="#" class="text-primary font-medium">Conditions d'utilisation</ULink>.
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>