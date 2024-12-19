// Create a simple Vue component to show details of selected animals dynamically
new Vue({
    el: '#vue-app',
    data: {
        animals: [
            { name: 'Lion', description: 'The lion is a species of big cat native to Africa and parts of Asia.' },
            { name: 'Tiger', description: 'The tiger is the largest cat species and is found in Asia.' },
            { name: 'Elephant', description: 'Elephants are large mammals found in Africa and Asia, known for their intelligence and size.' },
            { name: 'Zebra', description: 'Zebras are members of the horse family and are known for their distinctive black and white stripes.' }
        ],
        selectedAnimal: null
    },
    methods: {
        selectAnimal: function(animal) {
            this.selectedAnimal = animal;
        }
    },
    template: `
        <div>
            <h3>Select an animal to view its details</h3>
            <div class="list-group">
                <a href="#" class="list-group-item" v-for="animal in animals" @click="selectAnimal(animal)">
                    {{ animal.name }}
                </a>
            </div>
            <div v-if="selectedAnimal" class="mt-3">
                <h4>{{ selectedAnimal.name }}</h4>
                <p>{{ selectedAnimal.description }}</p>
            </div>
        </div>
    `
});
