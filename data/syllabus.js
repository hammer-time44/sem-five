// Course syllabus data. Edit here; the UI updates automatically.
window.SYLLABUS = [
  {
    "id": "cloud",
    "code": "BCSE355L",
    "name": "Cloud Architecture Design",
    "hours": 45,
    "modules": [
      {
        "no": 1,
        "title": "AWS Cloud Foundations & IAM",
        "hours": 3,
        "topics": "Introduction to Cloud Computing, Overview of AWS Global Infrastructure, AWS Shared Responsibility Model, AWS Identity and Access Management (IAM), IAM Users, Groups, and Policies, IAM Roles, IAM Best Practices"
      },
      {
        "no": 2,
        "title": "AWS Compute & Storage Services",
        "hours": 6,
        "topics": "AWS Compute Services, Amazon EC2 (Elastic Compute Cloud), EC2 Instance Types, EC2 Pricing Models, EC2 Instance Lifecycle, Auto Scaling, Elastic Load Balancing, AWS Storage Services, Amazon S3 (Simple Storage Service), S3 Storage Classes, S3 Lifecycle Policies, Amazon EBS (Elastic Block Store), Amazon Glacier, Amazon EFS (Elastic File System)"
      },
      {
        "no": 3,
        "title": "AWS Networking and Content Delivery",
        "hours": 6,
        "topics": "AWS Networking and Content Delivery, Amazon VPC (Virtual Private Cloud), VPC Subnets, Route Tables, Security Groups, VPC Peering, AWS Direct Connect, Amazon CloudFront"
      },
      {
        "no": 4,
        "title": "AWS Database Services",
        "hours": 6,
        "topics": "AWS Database Services, Amazon RDS (Relational Database Service), RDS Multi- AZ Deployments, RDS Read Replicas, Amazon Aurora, Amazon DynamoDB, DynamoDB Streams"
      },
      {
        "no": 5,
        "title": "AWS Management Tools & Cost Management",
        "hours": 4,
        "topics": "AWS Management Tools, AWS CloudWatch, AWS CloudTrail, AWS Config, AWS Systems Manager, AWS Cost Management, AWS Free Tier, AWS Billing and Account Management, AWS Budgets, AWS Trusted Advisor"
      },
      {
        "no": 6,
        "title": "AWS Security and Compliance",
        "hours": 4,
        "topics": "AWS Security and Compliance, AWS Shared Responsibility Model, AWS Key Management Service (KMS), AWS WAF (Web Application Firewall), AWS Shield, AWS Security Best Practices"
      },
      {
        "no": 7,
        "title": "AWS Application Integration & Architectural Best Practices",
        "hours": 8,
        "topics": "AWS Application Integration, Amazon SQS (Simple Queue Service), Amazon SNS (Simple Notification Service), Amazon SWF (Simple Workflow Service), AWS Step Functions, AWS Well-Architected Framework, Design Principles for AWS Cloud Architectures, Scalability and Elasticity, High Availability and Fault Tolerance, Security, Cost Optimization."
      },
      {
        "no": 8,
        "title": "AWS Migration and Hybrid Architecture",
        "hours": 8,
        "topics": "AWS Migration and Hybrid Architecture, AWS Database Migration Service (DMS), AWS Server Migration Service (SMS), AWS Snowball, AWS Snowball Edge, AWS Snowmobile"
      }
    ]
  },
  {
    "id": "os",
    "code": "BCSE303L",
    "name": "Operating Systems",
    "hours": 43,
    "modules": [
      {
        "no": 1,
        "title": "Introduction",
        "hours": 3,
        "topics": "Introduction to OS: Functionality of OS - OS design issues - Structuring methods (monolithic, layered, modular, micro-kernel models) - Abstractions, processes, resources - Influence of security, networking, and multimedia."
      },
      {
        "no": 2,
        "title": "OS Principles",
        "hours": 4,
        "topics": "System calls, System/Application Call Interface – Protection: User/Kernel modes - Interrupts -Processes - Structures (Process Control Block, Ready List etc.), Process creation, management in Unix – Threads: User level, kernel level threads and thread models."
      },
      {
        "no": 3,
        "title": "Scheduling",
        "hours": 9,
        "topics": "Processes Scheduling - CPU Scheduling: Pre-emptive, non-pre-emptive - Multiprocessor scheduling – Deadlocks - Resource allocation and management - Deadlock handling mechanisms: prevention, avoidance, detection, recovery."
      },
      {
        "no": 4,
        "title": "Concurrency",
        "hours": 8,
        "topics": "Inter-process communication, Synchronization - Implementing synchronization primitives (Peterson’s solution, Bakery algorithm, synchronization hardware) - Semaphores – Classical synchronization problems, Monitors: Solution to Dining Philosophers problem – IPC in Unix, Multiprocessors and Locking - Scalable Locks - Lock-free coordination."
      },
      {
        "no": 5,
        "title": "Memory Management",
        "hours": 7,
        "topics": "Main memory management, Memory allocation strategies, Virtual memory: Hardware support for virtual memory (caching, TLB) – Paging - Segmentation - Demand Paging - Page Faults - Page Replacement -Thrashing - Working Set."
      },
      {
        "no": 6,
        "title": "Virtualization and File System Management",
        "hours": 6,
        "topics": "Virtual Machines - Virtualization (Hardware/Software, Server, Service, Network - Hypervisors - Container virtualization - Cost of virtualization - File system interface (access methods, directory structures) - File system implementation (directory implementation, file allocation methods) - File system recovery - Journaling - Soft updates - Log-structured file system - Distributed file system."
      },
      {
        "no": 7,
        "title": "Storage Management, Protection and Security",
        "hours": 6,
        "topics": "Disk structure and attachment – Disk scheduling algorithms (seek time, rotational latency based)- System threats and security – Policy vs mechanism - Access vs authentication - System protection: Access matrix – Capability based systems - OS: performance, scaling, future directions in mobile OS."
      }
    ]
  },
  {
    "id": "ai",
    "code": "BCSE306L",
    "name": "Artificial Intelligence",
    "hours": 43,
    "modules": [
      {
        "no": 1,
        "title": "Introduction",
        "hours": 6,
        "topics": "Introduction- Evolution of AI, State of Art -Different Types of Artificial Intelligence- Applications of AI-Subfields of AI-Intelligent Agents- Structure of Intelligent Agents- Environments"
      },
      {
        "no": 2,
        "title": "Problem Solving based on Searching",
        "hours": 6,
        "topics": "Introduction to Problem Solving by searching Methods-State Space search, Uninformed Search Methods – Uniform Cost Search, Breadth First Search- Depth First Search-Depth- limited search, Iterative deepening depth-first, Informed Search Methods- Best First Search, A* Search"
      },
      {
        "no": 3,
        "title": "Local Search and Adversarial Search",
        "hours": 5,
        "topics": "Local Search algorithms – Hill-climbing search, Simulated annealing, Genetic Algorithm, Adversarial Search: Game Trees and Minimax Evaluation, Elementary two-players games: tic-tac-toe, Minimax with Alpha-Beta Pruning."
      },
      {
        "no": 4,
        "title": "Logic and Reasoning",
        "hours": 8,
        "topics": "Introduction to Logic and Reasoning -Propositional Logic-First Order Logic-Inference in First Order Logic- Unification, Forward Chaining, Backward Chaining, Resolution."
      },
      {
        "no": 5,
        "title": "Uncertain Knowledge and Reasoning",
        "hours": 5,
        "topics": "Quantifying Uncertainty- Bayes Rule -Bayesian Belief Network- Approximate Inference in Bayesian networks"
      },
      {
        "no": 6,
        "title": "Planning",
        "hours": 7,
        "topics": "Classical planning, Planning as State-space search, Forward search, backward search, Planning graphs, Hierarchical Planning, Planning and acting in Nondeterministic domains – Sensor-less Planning, Multiagent planning"
      },
      {
        "no": 7,
        "title": "Communicating, Perceiving and Acting",
        "hours": 6,
        "topics": "Communication-Fundamentals of Language -Probabilistic Language Processing -Information Retrieval- Information Extraction-Perception-Image Formation- Object Recognition."
      }
    ]
  },
  {
    "id": "dbms",
    "code": "BCSE302L",
    "name": "Database Systems",
    "hours": 43,
    "modules": [
      {
        "no": 1,
        "title": "Database Systems Concepts and Architecture",
        "hours": 4,
        "topics": "Need for database systems – Characteristics of Database Approach – Advantages of using DBMS approach - Actors on the Database Management Scene: Database Administrator - Classification of database management systems - Data Models - Schemas and Instances - Three-Schema Architecture - The Database System Environment - Centralized and Client/Server Architectures for DBMSs – Overall Architecture of Database Management Systems"
      },
      {
        "no": 2,
        "title": "Relational Model and E-R Modeling",
        "hours": 6,
        "topics": "Relational Model: Candidate Keys, Primary Keys, Foreign Keys - Integrity Constraints - Handling of Nulls - Entity Relationship Model: Types of Attributes, Relationships, Structural Constraints, Relational model Constraints – Mapping ER model to a relational schema – Extended ER Model - Generalization – Specialization – Aggregations."
      },
      {
        "no": 3,
        "title": "Relational Database Design",
        "hours": 6,
        "topics": "Database Design – Schema Refinement - Guidelines for Relational Schema - Functional dependencies - Axioms on Functional Dependencies- Normalization: First, Second and Third Normal Forms - Boyce Codd Normal Form, Multi-valued dependency and Fourth Normal form - Join dependency and Fifth Normal form"
      },
      {
        "no": 4,
        "title": "Physical Database Design and Query Processing",
        "hours": 8,
        "topics": "File Organization - Indexing: Single level indexing, multi-level indexing, dynamic multilevel Indexing - B+ Tree Indexing – Hashing Techniques: Static and Dynamic Hashing – Relational Algebra - Translating SQL Queries into Relational Algebra - Query Processing – Query Optimization: Algebraic Query Optimization, Heuristic query optimization Rules, Join Query Optimization using Indexing and Hashing - Tuple Relational Calculus."
      },
      {
        "no": 5,
        "title": "Transaction Processing and Recovery",
        "hours": 8,
        "topics": "Introduction to Transaction Processing – Transaction concepts: ACID Properties of Transactions, Transaction States - Serial and Serializable Schedules - Schedules based on recoverability – Schedules based on Serializability - Conflict Serializabilty - Recovery Concepts: Log Based Recovery Protocols, Recovery based on deferred update, Recovery techniques based on immediate update – Shadow Paging Algorithm"
      },
      {
        "no": 6,
        "title": "Concurrency Control in Transaction Processing",
        "hours": 8,
        "topics": "Concurrent Transactions – Lost Update Problem - Concurrency Control Techniques: Time Stamp Based Protocols, Thomas Write Rule, Lock Based Protocols, Lock Compatibility Matrix, - Two-Phase Locking Protocol - Lock Conversions - Graph Based Protocols for Concurrency Control - Tree Protocol for Concurrency Control – Deadlocks Based on Locks in Transactions – Deadlock Handling Techniques – Transaction Deadlock Detection Techniques – Transaction Deadlock Prevention Techniques – Multi-Granularity Locking for avoiding Transaction Deadlocks"
      },
      {
        "no": 7,
        "title": "NOSQL Database Management",
        "hours": 3,
        "topics": "Introduction, Need of NoSQL, CAP Theorem, different NoSQL data bases: Key-value data stores, Columnar families, Document databases, Graph databases"
      }
    ]
  },
  {
    "id": "cn",
    "code": "BCSE308L",
    "name": "Computer Networks",
    "hours": 43,
    "modules": [
      {
        "no": 1,
        "title": "Networking Principles and Layered Architecture",
        "hours": 6,
        "topics": "Data Communications and Networking: A Communications Model – Data Communications - Evolution of network, Requirements , Applications, Network Topology (Line configuration, Data Flow), Protocols and Standards, Network Models (OSI, TCP/IP)"
      },
      {
        "no": 2,
        "title": "Circuit and Packet Switching",
        "hours": 7,
        "topics": "Switched Communications Networks – Circuit Switching – Packet Switching – Comparison of Circuit Switching and Packet Switching – Implementing Network Software, Networking Parameters(Transmission Impairment, Data Rate and Performance)"
      },
      {
        "no": 3,
        "title": "Data Link Layer",
        "hours": 8,
        "topics": "Error Detection and Correction – Hamming Code , CRC, Checksum- Flow control mechanism – Sliding Window Protocol - GoBack - N - Selective Repeat - Multiple access Aloha - Slotted Aloha - CSMA, CSMA/CD – IEEE Standards(IEEE802.3 (Ethernet), IEEE802.11(WLAN))- RFID- Bluetooth Standards"
      },
      {
        "no": 4,
        "title": "Network Layer",
        "hours": 8,
        "topics": "IPV4 Address Space – Notations – Classful Addressing – Classless Addressing – Network Address Translation – IPv6 Address Structure – IPv4 and IPv6 header format"
      },
      {
        "no": 5,
        "title": "Routing Protocols",
        "hours": 6,
        "topics": "Routing-Link State and Distance Vector Routing Protocols- Implementation-Performance Analysis- Packet Tracer"
      },
      {
        "no": 6,
        "title": "Transport Layer",
        "hours": 5,
        "topics": "TCP and UDP-Congestion Control-Effects of Congestion-Traffic Management-TCP Congestion Control-Congestion Avoidance Mechanisms-Queuing Mechanisms-QoS Parameters"
      },
      {
        "no": 7,
        "title": "Application layer",
        "hours": 3,
        "topics": "Application layer-Domain Name System-Case Study : FTP-HTTP-SMTP-SNMP"
      }
    ]
  },
  {
    "id": "cd",
    "code": "BCSE307L",
    "name": "Compiler Design",
    "hours": 43,
    "modules": [
      {
        "no": 1,
        "title": "Introduction To Compilation And Lexical Analysis",
        "hours": 7,
        "topics": "Introduction to LLVM - Structure and Phases of a Compiler-Design Issues-Patterns- Lexemes-Tokens-Attributes-Specification of Tokens-Extended Regular Expression- Regular expression to Deterministic Finite Automata (Direct method) - Lex - A Lexical Analyzer Generator."
      },
      {
        "no": 2,
        "title": "Syntax Analysis",
        "hours": 8,
        "topics": "Role of Parser- Parse Tree - Elimination of Ambiguity – Top Down Parsing - Recursive Descent Parsing - LL (1) Grammars – Shift Reduce Parsers- Operator Precedence Parsing - LR Parsers, Construction of SLR Parser Tables and Parsing- CLR Parsing- LALR Parsing."
      },
      {
        "no": 3,
        "title": "Semantics Analysis",
        "hours": 5,
        "topics": "Syntax Directed Definition – Evaluation Order - Applications of Syntax Directed Translation - Syntax Directed Translation Schemes - Implementation of L-attributed Syntax Directed Definition."
      },
      {
        "no": 4,
        "title": "Intermediate Code Generation",
        "hours": 5,
        "topics": "Variants of Syntax trees - Three Address Code- Types – Declarations - Procedures - Assignment Statements - Translation of Expressions - Control Flow - Back Patching- Switch Case Statements."
      },
      {
        "no": 5,
        "title": "Code Optimization",
        "hours": 6,
        "topics": "Loop optimizations- Principal Sources of Optimization -Introduction to Data Flow Analysis - Basic Blocks - Optimization of Basic Blocks - Peephole Optimization- The DAG Representation of Basic Blocks -Loops in Flow Graphs - Machine Independent Optimization- Implementation of a naïve code generator for a virtual Machine- Security checking of virtual machine code."
      },
      {
        "no": 6,
        "title": "Code Generation",
        "hours": 5,
        "topics": "Issues in the design of a code generator- Target Machine- Next-Use Information - Register Allocation and Assignment- Runtime Organization- Activation Records."
      },
      {
        "no": 7,
        "title": "Parallelism",
        "hours": 7,
        "topics": "Parallelization- Automatic Parallelization- Optimizations for Cache Locality and Vectorization- Domain Specific Languages-Compilation- Instruction Scheduling and Software Pipelining- Impact of Language Design and Architecture Evolution on Compilers- Static Single Assignment"
      }
    ]
  }
];
