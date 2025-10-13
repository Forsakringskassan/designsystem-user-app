<template>
    <div class="container">
        <div class="row">
            <div class="col col--md-6">
                <h1>Ge fullmakt för ärenden</h1>

                <f-validation-form>
                    <template #error-message> Du har glömt fylla i något. Gå till: </template>

                    <f-personnummer-text-field v-validation.required v-model="textFieldModel" maxlength="100">
                        Fyll i ombudets personnummer
                    </f-personnummer-text-field>

                    <f-select-field id="dropplista" v-validation.required v-model="selectFieldModel">
                        <template #label> Etikett rubrik </template>

                        <option disabled hidden value="">Välj…</option>
                        <option v-for="alternative in alternatives" :key="alternative.id" :value="alternative.id">
                            {{ alternative.label }}
                        </option>
                        <option value="7">Alternativ 7</option>
                    </f-select-field>

                    <f-card>
                        <template #default>
                            <f-fieldset v-validation.required name="fullmakt-längd" border>
                                <template #label> Hur länge ska fullmakten gälla? </template>

                                <template #default>
                                    <f-radio-field v-model="radioModel" :value="true">
                                        4 år ( till och med 2028-10-01)
                                    </f-radio-field>
                                    <f-radio-field v-model="radioModel" :value="false">
                                        Fyll i ett datum
                                    </f-radio-field>
                                </template>
                            </f-fieldset>
                        </template>
                    </f-card>

                    <f-expandable-panel :expanded="fullmaktExpanded" header="h5" @toggle="onToggle">
                        <template #title> Villkor för fullmakten </template>
                        <template #default>
                            Villkor för fullmakten
                            <p>
                                <a class="anchor" href="" target="_blank">
                                    Länk till annan sida
                                </a>
                            </p>
                        </template>
                    </f-expandable-panel>

                    <f-card>
                        <template #default>
                            <f-checkbox-field v-model="checkboxModel" value="Ja">
                                Registrera fullmakt
                            </f-checkbox-field>
                        </template>
                        <template #footer>
                            <div class="button-group">
                                <button type="submit" class="button button--full-width button--primary button-group__item">
                                    Skicka in
                                </button>
                            </div>
                        </template>
                    </f-card>
                </f-validation-form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
    FSelectField,
    FExpandablePanel,
    FFieldset,
    FRadioField,
    FCheckboxField,
    FPersonnummerTextField,
    FCard,
    FValidationForm,
} from "@fkui/vue";
import { getAlternatives, type AlternativesModel } from "./repository";

export default defineComponent({
    components: {
        FSelectField,
        FExpandablePanel,
        FFieldset,
        FRadioField,
        FCheckboxField,
        FPersonnummerTextField,
        FCard,
        FValidationForm,
    },
    data() {
        return {
            textFieldModel: "",
            selectFieldModel: "",
            radioModel: undefined,
            checkboxModel: [],
            fullmaktExpanded: false,
            type: Boolean,
            alternatives: [] as AlternativesModel[],
        };
    },
    async mounted() {
            this.alternatives = await getAlternatives();
    },
    methods: {
        onToggle() {
            this.fullmaktExpanded = !this.fullmaktExpanded;
        },
    },
});
</script>
