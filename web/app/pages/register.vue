<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

const toast = useToast()

const fields: AuthFormField[] = [{
  name: 'email',
  type: 'email',
  label: 'Email',
  placeholder: 'Entrez votre email',
  required: true
}, {
  name: 'password',
  label: 'Mot de passe',
  type: 'password',
  placeholder: 'Entrez votre mot de passe',
  required: true
}]

const providers = [{
  label: 'Google',
  icon: 'i-simple-icons-google',
  onClick: () => {
    toast.add({ title: 'Google', description: 'Connexion avec Google' })
  }
}, {
  label: 'GitHub',
  icon: 'i-simple-icons-github',
  onClick: () => {
    toast.add({ title: 'GitHub', description: 'Connexion avec GitHub' })
  }
}]

const schema = z.object({
  email: z.email('Invalid email'),
  password: z.string('Mot de passe est requis').min(8, 'Doit contenir au moins 8 caractères')
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Submitted', payload)
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
        @submit="onSubmit"
        :submit="{
          label: 'Créer un compte',
          color: 'primary',
          variant: 'solid'
        }"
      >
        <template #description>
          Déjà un compte ? <ULink to="/login" class="text-primary font-medium">Connexion</ULink>.
        </template>
        <template #validation>
        </template>
        <template #footer>
          En créant un compte, vous acceptez nos <ULink to="/terms-of-service" class="text-primary font-medium">Conditions d'utilisation</ULink>.
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>