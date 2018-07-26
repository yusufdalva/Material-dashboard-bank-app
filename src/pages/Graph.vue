<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <div id="graphContainer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ForceGraph from 'force-graph'
import axios from 'axios'
export default {
  name: 'Graph',
  data () {
    return {
      mock: null,
      mock1: null,
      people: [],
      banks: [],
      accounts: [],
      json: {
        nodes: [],
        links: []
      }
    }
  },
  created () { // TODO - GOING TO BE THE DRIVER FUNCTION WHEN CONSTRUCTING THE GRAPH
  },
  methods: {
    loadPeople () {
      return new Promise(() => {
        axios.get('http://localhost:4040/api/customers')
          .then(response => {
            this.people = response.data
          })
      })
    },
    loadBanks () {
      return new Promise(() => {
        axios.get('http://localhost:4040/api/banks')
          .then(response => {
            this.banks = response.data
          })
      })
    },
    loadAcounts () {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:4040/api/accounts')
          .then(response => {
            this.accounts = response.data
            resolve(true)
          })
          .catch((err) => {
            reject(err)
            throw err
          })
      })
    },
    customersToGraph () {
      let resultCount = 0
      return new Promise((resolve) => {
        for (let i = 0; i < this.people.length; i++) {
          let node = {
            id: this.people[i]._id,
            fullname: this.people[i].customername,
            joinDate: this.people[i].createdAt,
            email: this.people[i].email,
            type: 'kisi'
          }
          this.json.nodes.push(node)
          resultCount++
          if (resultCount === this.people.length) {
            resolve(true)
          }
        }
      })
    },
    bankToGraph () {
      let resultCount = 0
      return new Promise((resolve) => {
        for (let i = 0; i < this.banks.length; i++) {
          let node = {
            id: this.banks[i]._id,
            bankname: this.banks[i].bankname,
            location: this.banks[i].location,
            lng: this.banks[i].longitude,
            lat: this.banks[i].latitude,
            joinDate: this.banks[i].createdAt,
            type: 'banka'
          }
          this.json.nodes.push(node)
          resultCount++
          if (resultCount === this.banks.length) {
            resolve(true)
          }
        }
      })
    },
    accountsToGraph () {
      let resultCount = 0
      return new Promise((resolve) => {
        for (let i = 0; i < this.accounts.length; i++) {
          let node = {
            id: this.accounts[i]._id,
            personId: this.accounts[i].owner,
            bankId: this.accounts[i].bank,
            balance: this.accounts[i].balance,
            type: 'hesap'
          }
          let bankEdge = {
            source: this.accounts[i]._id,
            target: this.accounts[i].bank,
            type: 'subesi'
          }
          let personEdge = {
            source: this.accounts[i].owner,
            target: this.accounts[i]._id,
            type: 'hesabi'
          }
          this.json.nodes.push(node)
          this.json.links.push(bankEdge)
          this.json.links.push(personEdge)
          resultCount++
          if (resultCount === this.accounts.length) {
            resolve(true)
          }
        }
      })
    },
    onLoad () {
      let highlightNodes = []
      let highlightLink = null
      const elem = document.getElementById('graphContainer')
      let graph = ForceGraph()
      graph(elem)
        .graphData(this.json)
        .nodeId('id')
        .nodeAutoColorBy('type')
        .linkSource('source')
        .linkTarget('target')
        .linkDirectionalParticles(2)
        .onNodeHover(node => {
          highlightNodes = node ? [node] : []
          elem.style.cursor = node ? '-webkit-grab' : null
        })
        .onLinkHover(link => {
          highlightLink = link
          highlightNodes = link ? [link.source, link.target] : []
        })
      this.mock = highlightNodes
      this.mock1 = highlightLink
    }
  }
}
</script>

<style scoped>

</style>
